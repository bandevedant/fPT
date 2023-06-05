import {ini,close,urlNameExtractor,urlValueExtractor} from './extractor.js';
import {Url} from '../models/url.js';

async function updatePrices() {
    await ini();
    let urls = await Url.find({});
    urls.forEach(async (url) => {
        const value = await urlValueExtractor(url.url);
        const date = Date.now();
        let values = url.values;
        let dates = url.dates;
        if(values.length == 365) {
            values = values.slice(1);
            dates = dates.slice(1);
        }
        values.push(value);
        dates.push(date);
        await Url.findOneAndUpdate({url: url.url}, {values: values, dates: dates});
        if (value < url.minimum_value) {
            const min = value;
            await Url.findOneAndUpdate({url: url.url}, {minimum_value: min});
            const { emails } = (await Email.findOne({url: url.url}));
            emails.forEach(email => {
                let mailOptions = {
                    from: 'vedantbande2002@gmail.com', 
                    to: email,
                    subject: 'Price change alert',
                    text: `Price changed for ${url.url} to ${min}`
                };
                transporter.sendMail(mailOptions, (err, data) => {
                    if (err) {
                        console.log(err);
                        return console.log('Error occurs');
                    }
                });            
            });
        }
    });
}

exports.updatePrices = updatePrices;