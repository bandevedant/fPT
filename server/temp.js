const cheerio = require("cheerio")
const axios = require("axios");

const extractProductImage=async(url)=>{
    //img class=_396cs4 _2amPTt _3qGmMb
    const res=await axios.request({
        method: "GET",
        url: url,
        headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })
    const $=cheerio.load(res.data);
    // const image=$("._1BweB8").find("._3kidJX").find("._3qGmMb").attr("src");
    const priceText=$(".aMaAEs .dyC4hf .CEmiEU ._16Jk6d").text();
   const price= parseInt(priceText.replace(/[^0-9]/g, "").replace(/,/g, ""));
      console.log(price);
    // return image;
}

extractProductImage("https://www.flipkart.com/samsung-6-kg-5-star-hygiene-steam-ceramic-heater-fully-automatic-front-load-washing-machine-in-built-white/p/itm2ee8237807ed7?pid=WMNFP6FWBB4AMHYJ&lid=LSTWMNFP6FWBB4AMHYJVZX57N&marketplace=FLIPKART&store=j9e%2Fabm%2F8qx&spotlightTagId=FkPickId_j9e%2Fabm%2F8qx&srno=b_1_1&otracker=clp_omu_Washing%2BMachines_5_27.dealCard.OMU_tvs-and-appliances-new-clp-store_tvs-and-appliances-new-clp-store_0SGZGFBGJ4UF_4&otracker1=clp_omu_PINNED_neo%2Fmerchandising_Washing%2BMachines_NA_dealCard_cc_5_NA_view-all_4&fm=neo%2Fmerchandising&iid=8f418147-e2a2-4eef-9468-dd75ced7add0.WMNFP6FWBB4AMHYJ.SEARCH&ppt=browse&ppn=browse&ssid=jhnxzn0tkg0000001685806661840")
