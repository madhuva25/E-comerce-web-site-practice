import React, { useEffect, useState , } from 'react';
import { Link, useNavigate ,useParams} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './css/Home.css';
//import video1 from "../images/iphone15pro/17231385bt.jpg";


const Home = () => { 
    const navigate = useNavigate();
    const params = useParams();
    const[cookies,removeCookie] = useCookies([]);
    const[username,setusername] = useState("");
    

    


  //I PHONE 15 PRO MAX...........................................
    //15pro max white
   const [image, setImage] = useState("../images/17231540.jpg");
  const image2w = "../images/17231540.jpg";
  //function
  const changeImagew = () => {
    setImage(image === "../images/brand_new_iphone_15_pro_max__5_1695823152_d5dd2e23_progressive.jpg" ? image2w : "../images/17231540.jpg");
  };
    
//15promx blue
  
  const image2b = "../images/17231493.jpg"
//function
  const changeImageb = () => {
    setImage(image === "../images/MME73_AV2.jpg" ? image2b : " ../images/17231493.jpg");
  };

//15promx dark
  
  const image2d = "../images/17231486.jpg";
//function
  const changeImaged = () => {
    setImage(image === "../images/MME73_AV2.jpg" ? image2d : "../images/17231486.jpg");
  };
  

  //15promx natural titanium
  
  const image2a = "../images/17231523.jpg";

//function
  const changeImagea = () => {
    setImage(image === "../images/MME73_AV2.jpg" ? image2a : "../images/17231523.jpg");
  
  };
  
  //..............................................................................................
  

  //.............................IPHONE 15 PRO.....................................................

  //15pro max white
  const [imagePro15, setImagepro15] = useState("../images/iphone15pro/17231754blt.jpg");
  const image2wPro15 = "../images/iphone15pro/17231812.jpg";
  //function
  const changeImagewPro15 = () => {
    setImagepro15(imagePro15 === "../images/brand_new_iphone_15_pro_max__5_1695823152_d5dd2e23_progressive.jpg" ? image2wPro15 : "../images/iphone15pro/17231812.jpg");
  };
    
//15promx blue
  
  const image2bPro15 = "../images/iphone15pro/17231754blt.jpg"
//function
  const changeImagebPro15 = () => {
    setImagepro15(imagePro15 === "../images/MME73_AV2.jpg" ? image2bPro15 : "../images/iphone15pro/17231754blt.jpg");
  };

//15promx dark
  
  const image2dPro15 = "../images/iphone15pro/17231385bt.jpg";
//function
  const changeImagedPro15 = () => {
    setImagepro15(imagePro15 === "../images/MME73_AV2.jpg" ? image2dPro15 :"../images/iphone15pro/17231385bt.jpg");
  };
  

  //15promx natural titanium
  
  const image2aPro15 = "../images/iphone15pro/17231805wt.jpg";

//function
  const changeImageaPro15 = () => {
    setImagepro15(imagePro15 === "../images/MME73_AV2.jpg" ? image2aPro15 : "../images/iphone15pro/17231805wt.jpg");
  
  };
  

  //...............................................................................................

//.................................IPHONE 15 PLUS......................................................

 //15pro max black
 const [imagePlus15, setImagePlus15] = useState("../images/iphone15plus/17230364blue.jpg");
 const image2dPlus15 = "../images/iphone15plus/17230363black.jpg";
 //function
 const changeImagedPlus15 = () => {
   setImagePlus15(imagePlus15 === "../images/brand_new_iphone_15_pro_max__5_1695823152_d5dd2e23_progressive.jpg" ? image2dPlus15 : "../images/iphone15plus/17230363black.jpg");
 };
   
//14promx blue
 
 const image2bPlus15 = "../images/iphone15plus/17230364blue.jpg"
//function
 const changeImagebPlus15 = () => {
   setImagePlus15(imagePlus15 === "../images/MME73_AV2.jpg" ? image2bPlus15 : " ../images/iphone15plus/17230364blue.jpg");
 };

//14promx green
 
 const image2gPlus15 = "../images/iphone15plus/17230365green.jpg";
//function
 const changeImagegPlus15 = () => {
   setImagePlus15(imagePlus15 === "../images/MME73_AV2.jpg" ? image2gPlus15 : "../images/iphone15plus/17230365green.jpg");
 };
 

 
 

 
 //15promx pink
 
 const image2pPlus15 = "../images/iphone15plus/17230366pink.jpg";

//function
 const changeImagepPlus15 = () => {
   setImagePlus15(imagePlus15 === "../images/MME73_AV2.jpg" ? image2pPlus15 : "../images/iphone15plus/17230366pink.jpg");
 
 };
 
 //15promx yellow
 
 const image2yPlus15 = "../images/iphone15plus/17230367yellow.jpg";

//function
 const changeImageyPlus15 = () => {
   setImagePlus15(imagePlus15 === "../images/MME73_AV2.jpg" ? image2yPlus15 : "../images/iphone15plus/17230367yellow.jpg");
 
 };
 

//.....................................................................................................


//........................................IPHONE 15.....................................................


 //15pro max pink
 const [image15, setImage15] = useState("../images/iphone15/17230351pink.jpg");
 const image2w15 = "../images/iphone15/17230351pink.jpg";
 //function
 const changeImagew15 = () => {
   setImage15(image15 === "../images/brand_new_iphone_15_pro_max__5_1695823152_d5dd2e23_progressive.jpg" ? image2wPro15 : "../images/iphone15/17230351pink.jpg");
 };
   
//15promx blue
 
 const image2b15 = "../images/iphone15/17230397blue.jpg"
//function
 const changeImageb15 = () => {
   setImage15(imagePro15 === "../images/MME73_AV2.jpg" ? image2bPro15 : " ../images/iphone15/17230397blue.jpg");
 };

//15promx dark
 
 const image2d15 = "../images/iphone15/17230348black.jpg";
//function
 const changeImaged15 = () => {
   setImage15(image15 === "../images/MME73_AV2.jpg" ? image2d15 : "../images/iphone15/17230348black.jpg");
 };
 

 //15promx yellow
 
 const image2a15 = "../images/iphone15/17230352yellow.jpg";

//function
 const changeImagea15 = () => {
   setImage15(image15 === "../images/MME73_AV2.jpg" ? image2a15 : "../images/iphone15/17230352yellow.jpg");
 
 };
 //15promx green
 
 const image2g15 = "../images/iphone15/17230350green.jpg";

//function
 const changeImageg15 = () => {
   setImage15(image15 === "../images/MME73_AV2.jpg" ? image2g15 : "../images/iphone15/17230350green.jpg");
 
 };
//.................................................................................................................. 




//..................................................................IPHONE 14 PRO MAX................................


 //15pro max white
 const [imagePro14, setImagepro14] = useState("../images/iphone14proMax/16553836dark.jpg");
 const image2wPro14 = "../images/iphone14proMax/16553851white.jpg";
 //function
 const changeImagewPro14 = () => {
   setImagepro14(imagePro14 === "../images/brand_new_iphone_15_pro_max__5_1695823152_d5dd2e23_progressive.jpg" ? image2wPro14 : "../images/iphone14proMax/16553851white.jpg");
 };
   
//15promx deep Purple
 
 const image2bPro14 = "../images/iphone14proMax/16553836dark.jpg"
//function
 const changeImagebPro14 = () => {
   setImagepro14(imagePro14 === "../images/MME73_AV2.jpg" ? image2bPro14 :"../images/iphone14proMax/16553836dark.jpg");
 };

//15promx dark
 
 const image2dPro14 = "../images/iphone14proMax/16553788black.jpg";
//function
 const changeImagedPro14 = () => {
   setImagepro14(imagePro14 === "../images/MME73_AV2.jpg" ? image2dPro14 :  "../images/iphone14proMax/16553788black.jpg");
 };
 

 //14promx Gold
 
 const image2aPro14 = "../images/iphone14proMax/16553817yellow.jpg";

//function
 const changeImageaPro14 = () => {
   setImagepro14(imagePro14 === "../images/MME73_AV2.jpg" ? image2aPro14 : "../images/iphone14proMax/16553817yellow.jpg");
 
 };
 


//....................................................................................................................

//.........................................IPHONE 14 PRO.................................................................

//15pro max white
const [imagePro14m, setImagepro14m] = useState("../images/iphone14pro/16553679sl.jpg");
const image2wPro14m = "../images/iphone14pro/16553679sl.jpg";
//function
const changeImagewPro14m = () => {
  setImagepro14m(imagePro14m === "../images/brand_new_iphone_14_pro_max__4_1694823142_d4dd2e23_progressive.jpg" ? image2wPro14m : "../images/iphone14pro/16553679sl.jpg");
};
  
//14promx gold

const image2bPro14m = "../images/iphone14pro/16553764gold.jpg"
//function
const changeImagebPro14m = () => {
  setImagepro14m(imagePro14m === "../images/MME73_AV2.jpg" ? image2bPro14m : " ../images/iphone14pro/16553764gold.jpg");
};

//14promx dark

const image2dPro14m = "../images/iphone14pro/16553769black.jpeg";
//function
const changeImagedPro14m = () => {
  setImagepro14m(imagePro14m === "../images/MME73_AV2.jpg" ? image2dPro14m : "../images/iphone14pro/16553769black.jpeg");
};


//14promx deep purpule  

const image2aPro14m = "../images/iphone14pro/16553710deepp.jpg";

//function
const changeImageaPro14m = () => {
  setImagepro14m(imagePro14m === "../images/MME73_AV2.jpg" ? image2aPro14m : "../images/iphone14pro/16553710deepp.jpg");

};

//.......................................................................................................................


//.............................................IPHONE 14 PLUS.............................................................



 //15pro max stralight
 const [imagePlus14, setImagePlus14] = useState("../images/iphone14/16930396yellow.jpg");
 const image2wPlus14 = "../images/iphone14plus/16472799starlight.jpg";
 //function
 const changeImagewPlus14 = () => {
   setImagePlus14(imagePlus14 === "../images/brand_new_iphone_14_pro_max__4_1694823142_d4dd2e23_progressive.jpg" ? image2wPlus14 :"../images/iphone14plus/16472799starlight.jpg");
 };
   
//15promx midnight
 
 const image2bPlus14 = "../images/iphone14plus/16472798black.jpg"
//function
 const changeImagebPlus14 = () => {
   setImagePlus14(imagePlus14 === "../images/MME73_AV2.jpg" ? image2bPlus14 : " ../images/iphone14plus/16472798black.jpg");
 };

//14promx red
 
 const image2dPlus14 = "../images/iphone14plus/16482240red.jpg";
//function
 const changeImagerPlus14 = () => {
  setImagePlus14(imagePlus14 === "../images/MME73_AV2.jpg" ? image2dPlus14 : "../images/iphone14plus/16482240red.jpg");
 };
 

 //15promx natural yellow
 
 const image2yPlus14 = "../images/iphone14plus/16930407yellow.jpg";

//function
 const changeImageyPlus14 = () => {
   setImagePlus14(imagePlus14 === "../images/MME73_AV2.jpg" ? image2yPlus14 : "../images/iphone14plus/16930407yellow.jpg");
 
 };

 // 14 plus green
 const image2gPlus14 = "../images/iphone14plus/16472800blue.jpg";

//function
 const changeImagegPlus14 = () => {
   setImagePlus14(imagePlus14 === "../images/MME73_AV2.jpg" ? image2gPlus14 : "../images/iphone14plus/16472800blue.jpg");
 
 };

 // 14 plus purpul
 const image2pPlus14 = "../images/iphone14plus/16553806purpule.jpeg";

//function
 const changeImagepPlus14 = () => {
   setImagePlus14(imagePlus14 === "../images/MME73_AV2.jpg" ? image2pPlus14 : "../images/iphone14plus/16553806purpule.jpeg");
 
 };

//........................................................................................................................


//..................................................................IPHONE 14.............................................



 //15pro max yellow
 const [image14, setImage14] = useState("../images/iphone14/16930396yellow.jpg");
 const image2w14 = "../images/iphone14/16930396yellow.jpg";
 //function
 const changeImagew14 = () => {
   setImage14(image14 === "../images/brand_new_iphone_14_pro_max__4_1694823142_d5dd2e23_progressive.jpg" ? image2wPro15 :"../images/iphone14/16930396yellow.jpg");
 };
   
//15promx blue
 
 const image2b14 = "../images/iphone14/16482242blue.jpg"
//function
 const changeImageb14 = () => {
   setImage14(imagePro14 === "../images/MME73_AV2.jpg" ? image2bPro14 : " ../images/iphone14/16482242blue.jpg");
 };

//14promx midnight
 
 const image2d14 = "../images/iphone14/16482430midnight.jpg";
//function
 const changeImaged14 = () => {
   setImage14(image14 === "../images/MME73_AV2.jpg" ? image2d14 : "../images/iphone14/16482430midnight.jpg");
 };
 

 //14promx red
 
 const image2a14 = "../images/iphone14/16482240red.jpg";

//function
 const changeImagea14 = () => {
   setImage14(image14 === "../images/MME73_AV2.jpg" ? image2a14 : "../images/iphone14/16482240red.jpg");
 
 };
 //14promx purple
 
 const image2p14 = "../images/iphone14/16482241purple.jpg";

//function
 const changeImagep14 = () => {
   setImage14(image14 === "../images/MME73_AV2.jpg" ? image2p14 : "../images/iphone14/16482241purple.jpg");
 
 };
 //14promx silver
 
 const image2s14 = "../images/iphone14/16482243silver.jpg";

//function
 const changeImages14 = () => {
   setImage14(image14 === "../images/MME73_AV2.jpg" ? image2s14 : "../images/iphone14/16482243silver.jpg");
 
 };


//.........................................................................................................................
//.........................................................................................................................
//.........................................I...............................................................................
//......................................................P..................................................................
//.....................................................................A...................................................
//.......................................................................................D.................................
//......................................................IPADA(10THGEN)..................................................................


 //15pro max BLUE
 const [imagepad10, setImagepad10] = useState("../images/IPAD10/16566920blue.jpg");
 const image2wpad10= "../images/IPAD10/16566920blue.jpg";
 //function
 const changeImagewpad10 = () => {
   setImagepad10(imagepad10 === "../images/brand_new_iphone_14_pro_max__4_1694823142_d5dd2e23_progressive.jpg" ? image2wpad10 :"../images/IPAD10/16566920blue.jpg");
 };
   
//15promx PINK
 
 const image2bpad10 = "../images/IPAD10/16566908pink.jpg"
//function
 const changeImagebpad10 = () => {
  setImagepad10(imagepad10 === "../images/MME73_AV2.jpg" ? image2bpad10 : " ../images/IPAD10/16566908pink.jpg");
 };

//14promx YELLOW
 
 const image2dpad10 = "../images/IPAD10/16566907yellow.jpg";
//function
 const changeImagedpad10 = () => {
   setImagepad10(imagepad10 === "../images/MME73_AV2.jpg" ? image2dpad10 : "../images/IPAD10/16566907yellow.jpg");
 };
 

 //14promx red
 
 const image2apad10 = "../images/IPAD10/15204592.jpg";

//function
 const changeImageapad10 = () => {
   setImagepad10(imagepad10 === "../images/MME73_AV2.jpg" ? image2apad10 : "../images/IPAD10/15204592.jpg");
 
 };

 //14promx silver
 
 const image2spad10 = "../images/IPAD10/16566905silver.jpg";

//function
 const changeImagespad10 = () => {
   setImagepad10(imagepad10 === "../images/MME73_AV2.jpg" ? image2spad10 : "../images/IPAD10/16566905silver.jpg");
 
 };


//.........................................................................................................................
//..........................i..............................................................................................
//..............................................P.......................A....................................................
//.............................................................D............................................................
//...................................................................................9......................................

//15pro silver
const [imagepad9, setImagepad9] = useState("../images/ipad9/15733039silver.jpg");
const image2wpad9= "../images/ipad9/15733039silver.jpg";
//function
const changeImagewpad9 = () => {
  setImagepad9(imagepad9 === "../images/brand_new_iphone_14_pro_max__4_1694823142_d5dd2e23_progressive.jpg" ? image2wpad9 :"../images/ipad9/15733039silver.jpg");
};
  
//15promx space gray

const image2bpad9 = "../images/ipad9/17459487sgray.jpeg"
//function
const changeImagebpad9 = () => {
  setImagepad9(imagepad9 === "../images/MME73_AV2.jpg" ? image2bpad9 : " ../images/ipad9/17459487sgray.jpeg");
};

//...............................I..........................................................................................
//.............................................P............................................................................
//............................................................A.............................................................
//..........................................................................D............................................... 
//....................................................................................AIR..................................... 








//15pro max silver
const [imagepadair, setImagepadair] = useState("../images/ipadair4/15337521space grayjpeg.jpeg");
const image2wpadair= "../images/ipadair4/15337394silver.jpg";
//function
const changeImagewpadair = () => {
  setImagepadair(imagepadair === "../images/brand_new_iphone_14_pro_max__4_1694823142_d5dd2e23_progressive.jpg" ? image2wpadair :"../images/ipadair4/15337394silver.jpg");
};
  
//15promx blue

const image2bpadair = "../images/ipadair4/15337372blue.jpg"
//function
const changeImagebpadair = () => {
  setImagepadair(imagepadair === "../images/MME73_AV2.jpg" ? image2bpadair : " ../images/ipadair4/15337372blue.jpg");
};

//14promx green

const image2dpadair = "../images/ipadair4/17362325roseGold.jpeg";
//function
const changeImagedpadair = () => {
  setImagepadair(imagepadair === "../images/MME73_AV2.jpg" ? image2dpadair : "../images/ipadair4/17362325roseGold.jpeg");
};


//14promx rose gold

const image2apadair = "../images/ipadair4/15337423green.jpg";

//function
const changeImageapadair = () => {
  setImagepadair(imagepadair === "../images/MME73_AV2.jpg" ? image2apadair : "../images/ipadair4/15337423green.jpg");

};
//14promx space gray

const image2ppadair = "../images/ipadair4/15337521space grayjpeg.jpeg";

//function
const changeImageppadair = () => {
  setImagepadair(imagepadair === "../images/MME73_AV2.jpg" ? image2ppadair : "../images/ipadair4/15337521space grayjpeg.jpeg");

};

//......................................................................................................................... 
//......................................................................................................................... 
//......................................................................................................................... 
//.......................................I ..................................................................................
//....................................................P.....................................................................
//.............................................................A............................................................
//..........................................................................D...............................................
//..................................................................................A..I...R..................................
//..................................................................................................5TH.......................


//15pro max yellow
const [imagepadair5TH, setImagepadair5TH] = useState("../images/ipadair5/16004380purple.jpg");
const image2wpadair5TH= "../images/ipadair5/16004378starlight.jpg";
//function
const changeImagewpadair5TH = () => {
  setImagepadair5TH(imagepadair5TH === "../images/brand_new_iphone_14_pro_max__4_1694823142_d5dd2e23_progressive.jpg" ? image2wpadair5TH :"../images/ipadair5/16004378starlight.jpg");
};
  
//15promx blue

const image2bpadair5TH = "../images/ipadair5/16004377blue.jpg"
//function
const changeImagebpadair5TH = () => {
  setImagepadair5TH(imagepadair5TH === "../images/MME73_AV2.jpg" ? image2bpadair5TH : " ../images/ipadair5/16004377blue.jpg");
};

//14promx space gray

const image2dpadair5TH = "../images/ipadair5/16004375space gray.jpg";
//function
const changeImagedpadair5TH = () => {
  setImagepadair5TH(imagepadair5TH === "../images/MME73_AV2.jpg" ? image2dpadair5TH : "../images/ipadair5/16004375space gray.jpg");
};


//14promx pink

const image2apadair5TH = "../images/ipadair5/16004376pink.jpg";

//function
const changeImageapadair5TH = () => {
  setImagepadair5TH(imagepadair5TH === "../images/MME73_AV2.jpg" ? image2apadair5TH : "../images/ipadair5/16004376pink.jpg");

};
//14promx purple

const image2ppadair5TH = "../images/ipadair5/16004380purple.jpg";

//function
const changeImageppadair5TH = () => {
  setImagepadair5TH(imagepadair5TH === "../images/MME73_AV2.jpg" ? image2ppadair5TH : "../images/ipadair5/16004380purple.jpg");

};







//.........................................................................................................................
//.........................................................................................................................
//.......................I..................................................................................................
//...................................P......................................................................................
//.................................................A........................................................................
//...............................................................D..........................................................
//...........................................................................M.....I.....N...I...............................

const [imagepadMINI, setImagepadMINI] = useState("../images/ipadmini/15733142pinkjpg.jpg");
const image2wpadMINI= "../images/ipadmini/15733141starlight.jpg";
//function
const changeImagewpadMINI = () => {
  setImagepadMINI(imagepadMINI === "../images/brand_new_iphone_14_pro_max__4_1694823142_d5dd2e23_progressive.jpg" ? image2wpadMINI :"../images/ipadmini/15733141starlight.jpg");
};
  
//15promx purple

const image2bpadMINI = "../images/ipadmini/15733140purple.jpg"
//function
const changeImagebpadMINI = () => {
  setImagepadMINI(imagepadMINI === "../images/MME73_AV2.jpg" ? image2bpadMINI : " ../images/ipadmini/15733140purple.jpg");
};

//14promx space gray

const image2dpadMINI = "../images/ipadmini/15733135sg.jpg";
//function
const changeImagedpadMINI = () => {
  setImagepadMINI(imagepadMINI === "../images/MME73_AV2.jpg" ? image2dpadMINI : "../images/ipadmini/15733135sg.jpg");
};


//14promx pink

const image2apadMINI = "../images/iphone14/15733142pinkjpg.jpg";

//function
const changeImageapadMINI = () => {
  setImagepadMINI(imagepadMINI === "../images/MME73_AV2.jpg" ? image2apadMINI : "../images/ipadmini/15733142pinkjpg.jpg");

};
//.........................................................................................................................
//..........................................M..................A..........................C................................... 
//........................................................BOOK................................................................. 
//......................................................................................................................... 
//........................................................AIR.............15.................................................... 



//15pro max silver
const [imagemacair15, setImagemacair15] = useState("../images/macBookAir/17146825spaceGrayjpg.jpg");
const image2wmacair15= "../images/macBookAir/17146829silverrealjpg.jpg";
//function
const changeImagewmacair15 = () => {
  setImagemacair15(imagemacair15 === "../images/brand_new_iphone_14_pro_max__4_1694823142_d5dd2e23_progressive.jpg" ? image2wmacair15 :"../images/macBookAir/17146829silverrealjpg.jpg");
};
  
//15promx silver

const image2bmacair15 = "../images/macBookAir/17146833silver.jpg"
//function
const changeImagebmacair15 = () => {
  setImagemacair15(imagemacair15 === "../images/MME73_AV2.jpg" ? image2bmacair15 : " ../images/macBookAir/17146833silver.jpg");
};

//14promx space gray

const image2dmacair15 = "../images/macBookAir/17146825spaceGrayjpg.jpg";
//function
const changeImagedmacair15 = () => {
  setImagemacair15(imagemacair15 === "../images/MME73_AV2.jpg" ? image2dmacair15 : "../images/macBookAir/17146825spaceGrayjpg.jpg");
};


//14promx midnight

const image2amacair15 = "../images/macBookAir/17146836midnight.jpg";

//function
const changeImageamacair15 = () => {
  setImagemacair15(imagemacair15 === "../images/MME73_AV2.jpg" ? image2amacair15 : "../images/macBookAir/17146836midnight.jpg");

};






//......................................................................................................................... 
//..............................M..................A....................C.....................B..........O............O.......... 
//...................................................K...................PRO................................................... 


//15pro max silver
const [imagemacprom1   , setImagemacprom1] = useState("../images/macBookAir/15776869silver.jpg");
const image2wmacprom1= "../images/macBookAir/15776869silver.jpg";
//function
const changeImageamacprom1= () => {
  setImagemacprom1(imagemacprom1=== "../images/brand_new_iphone_14_pro_max__4_1694823142_d5dd2e23_progressive.jpg" ? image2wmacprom1:"../images/macBookAir/15776869silver.jpg");
};
  
//15promx space gray

const image2bmacprom1= "../images/macBookAir/15311918sg.jpg"
//function
const changeImagebmacprom1= () => {
  setImagemacprom1(imagemacprom1=== "../images/MME73_AV2.jpg" ? image2bmacprom1: " ../images/macBookAir/15311918sg.jpg");
};

   


//......................................................................................................................... 
//......................................................................................................................... 
//........................................M.............................A....................C................................ 
//.....................................................B..............O........O.....................K......................... 
//.....................................................PRO...................................................M1.................

//15pro max silver
const [imagemacpro   , setImagemacpro] = useState("../images/macBookAir/16670259proSGray.jpg");
const image2wmacpro= "../images/macBookAir/17168211silver.jpeg";
//function
const changeImagewmacpro= () => {
  setImagemacpro(imagemacpro=== "../images/brand_new_iphone_14_pro_max__4_1694823142_d5dd2e23_progressive.jpg" ? image2wmacpro:"../images/macBookAir/17168211silver.jpeg");
};
  
//15promx silver

const image2bmacpro= "../images/macBookAir/16670259proSGray.jpg"
//function
const changeImagebmacpro= () => {
  setImagemacpro(imagemacpro=== "../images/MME73_AV2.jpg" ? image2bmacpro: " ../images/macBookAir/16670259proSGray.jpg");
};




//......................................................................................................................... 
//.........................M...................A................C.............B........O............O.............K............... 
//...................................P...................R.............O..........M.........1................................... 
//......................................................................................................13................... 
//......................................................................................................................... 


const [imagemacprom113   , setImagemacprom113] = useState("../images/macBookAir/16688797silver.jpeg");
const image2wmacprom113= "../images/macBookAir/16282200spacegray.jpg";
//function
const changeImageamacprom113= () => {
  setImagemacprom113(imagemacprom113=== "../images/brand_new_iphone_14_pro_max__4_1694823142_d5dd2e23_progressive.jpg" ? image2wmacprom113:"../images/macBookAir/16282200spacegray.jpg");
};
  
//15promx silver

const image2bmacprom113= "../images/macBookAir/16688797silver.jpeg"
//function
const changeImagebmacprom113= () => {
  setImagemacprom113(imagemacprom113=== "../images/MME73_AV2.jpg" ? image2bmacprom113: " ../images/macBookAir/16688797silver.jpeg");
};


//......................................................................................................................... 
//......................................................................................................................... 
//......................................................................................................................... 




    useEffect(() => {
        const verifyCookies = async()=>{
            if(!cookies.token){
                navigate("/login")
            }
            try {
                const {data} = await axios.post("http://localhost:3000",{},
                {withCredentials: true});
                const {status,user}= data;
                setusername(user);
                if (status) {
                    toast(`hello ${user}`,{position:"top-right"});
                } else {
                    removeCookie("token");
                    navigate("/login");
                }
            } catch (error) {
                console.error(error);
            }
        };
        verifyCookies();
    }, [cookies, navigate, removeCookie]);

    const Logout = ()=>{
        removeCookie("token");
        navigate("/signup");
    };

    var index = 0;

    function move(direction) {
      const images = document.querySelectorAll(".image");
      images.forEach(image => {
          const currentLeft = parseInt(image.style.left) || 0;
          const direction = Math.random() < 0.5 ? 1 : -1; // Randomly choose left or right direction
          const distance = Math.floor(Math.random() * 50) + 20; // Random distance to move
          const newLeft = currentLeft + direction * distance;
          
          // Check if the new position is within the container
          if (newLeft >= 0 && newLeft + image.clientWidth <= document.getElementById("imageContainer").clientWidth) {
              image.style.left = newLeft + "px";
          }
      });

    }

  


 
    




    return (
        <>
            <div className="Home_page">
                <h4>
                    {""}
                    welcome<span>{username}</span>
                </h4>

  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/hhh.jpg" class="d-block w-100" alt="..." style={{height:"500px",width:"100px"}}/>
    </div>
    <div class="carousel-item">
      <img src="/images/iphone_15_pro_max_512mb_1694787806_21e529c2_progressive.jpg" class="d-block w-100" alt="..." style={{height:"500px", width:"auto"}}/>
    </div>
    <div class="carousel-item">
      <img src="/images/iphone-15-pro_overview__f8jz7aagka2q_og.png" class="d-block w-100" alt="..." style={{height:"500px", width:"auto"}}/>
     
    </div>

  </div>
</div><br/>

<h3>the sri lanka's number one supplier</h3>


    
 
                <button onClick={Logout}>Logout</button>
            </div>
            <ToastContainer/>



         
    <div id="imageContainer" style={{display: "flex", overflow: "hidden", position: "relative"}}>
    <img src="../images/MME73_AV2.jpg" style={{flex:"0 0 auto ",width:"300px", height:"auto"}}/>
    <img src="../images/apple-macbook-pro-16-m1-16gb-ssd-512gb-grigio-siderale-2546.png" style={{flex: "0 0 auto ",width:"300px",height:"auto"}}/>
    <img src="../images/apple-watch-series-8-45mm-midnight-7-1-800x800h.jpg"style={{flex: "0 0 auto ",width:"300px",height:"auto"}}/>
    <img src="../images/homepod__dlwt789yhxme_og.png" style={{flex: "0 0 auto ",width:"300px",height:"auto"}}/>
    <img src="../images/Apple-TV.jpg"style={{flex: "0 0 auto ",width:"300px",height:"auto"}}/>
    <img src="../images/Apple-iPad-Air-4-03.jpg" style={{flex: "0 0 auto ",width:"300px",height:"auto"}}/>
    <img src="../images/maxresdefault.jpg" style={{flex: "0 0 auto ",width:"300px",height:"auto"}}/>
</div>

<button id="leftButton" onClick={() => move('left')} style={{position: "absolute", left: "10px"}}>&#8592;</button>
<button id="rightButton" onClick={() => move('right')} style={{position: "absolute", right: "10px"}}>&#8594;</button>
<br></br>
<br></br>
<br></br>
<div className="title"><h1>Apple iPhone</h1>
                 <p className="tp">Which iPhone is right for you?</p></div>

                 
<div className='card-container'>
<ul className='trow'>

 
<li className="responsive-cell">
  
<div className="card-iph" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={image} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 15 Pro Max</a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 15 Pro Max</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImageb}>g</button></li>
      <li className='gray1'><button onClick={changeImagea}>g</button></li>
      <li className='dark1'><button onClick={changeImaged}>g</button></li>
      
      <li className='white1'><button onClick={changeImagew}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>

<li className="responsive-cell">

    <div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagePro15} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 15 Pro </a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 15 Pro </p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebPro15}>g</button></li>
      <li className='gray1'><button onClick={changeImageaPro15}>g</button></li>
      <li className='dark1'><button onClick={changeImagedPro15}>g</button></li>
      
      <li className='white1'><button onClick={changeImagewPro15}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>

</div>

</li> 


<li className="responsive-cell">

<div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagePlus15} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 15 Plus</a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 15 Plus</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button style={{backgroundColor:'rgb(166, 255, 248)' ,border:'none',color:'rgb(166, 255, 248)'}} onClick={changeImagebPlus15}>g</button></li>
      <li className='dark1'><button style={{backgroundColor:'' ,border:'none', marginLeft:'-30px'}} onClick={changeImagedPlus15}>g</button></li>
      <li className='white1'><button style={{backgroundColor:'rgb(173, 255, 138)' ,border:'none',marginLeft:'-25px',color:'rgb(173, 255, 138)'}} onClick={changeImagegPlus15 }>g</button></li>
      <li className='white1'><button style={{backgroundColor:'rgb(255, 161, 186)' ,border:'none',marginLeft:'-20px',color:'rgb(255, 161, 186)'}}onClick={changeImagepPlus15}>g</button></li>
      <li className='white1'><button style={{backgroundColor:'rgb(240, 237, 185)' ,border:'none',marginLeft:'-15px',color:'rgb(240, 237, 185)'}} onClick={changeImageyPlus15}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>



<li className="responsive-cell">

<div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={image15} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 15</a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 15</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button style={{backgroundColor:'rgb(166, 255, 248)' ,border:'none',color:'rgb(166, 255, 248)'}} onClick={changeImageb15}>g</button></li>
      <li className='gray1'><button style={{backgroundColor:'rgb(240, 237, 185)' ,border:'none',marginLeft:'-35px',color:'rgb(240, 237, 185)'}}  onClick={changeImagea15}>g</button></li>
      <li className='dark1'><button style={{marginLeft:'-25px'}} onClick={changeImaged15}>g</button></li>
      

      <li className='white1'><button  style={{backgroundColor:'rgb(255, 161, 186)' ,border:'none',marginLeft:'-20px',color:'rgb(255, 161, 186)'}} onClick={changeImagew15}>g</button></li>
      <li className='white1'><button style={{backgroundColor:'rgb(173, 255, 138)' ,border:'none',marginLeft:'-15px',color:'rgb(173, 255, 138)'}} onClick={changeImageg15}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>





</ul>




<ul className='trow'>

  <li className="responsive-cell">
  
<div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagePro14} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 14 Pro Max </a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 14 Pro Max </p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button  onClick={changeImagebPro14}>g</button></li>
      <li className='gray1'><button style={{backgroundColor:'rgb(230, 221, 67)' ,border:'none',color:'rgb(230, 221, 67)'}} onClick={changeImageaPro14}>g</button></li>
      <li className='dark1'><button onClick={changeImagedPro14}>g</button></li>
      
      <li className='white1'><button onClick={changeImagewPro14}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>


</li>  
    <li className="responsive-cell">

<div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagePro14m} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 14 Pro</a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 14 Pro</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button style={{backgroundColor:'rgb(230, 221, 67)' ,border:'none',color:'rgb(230, 221, 67)'}} onClick={changeImagebPro14m}>g</button></li>
      <li className='bll'><button style={{marginLeft:'-25px'}} onClick={changeImageaPro14m}>g</button></li>
      <li className='dark1'><button onClick={changeImagedPro14m}>g</button></li>
      
      <li className='white1'><button onClick={changeImagewPro14m}>g</button></li>
      
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>

 <li className="responsive-cell">

   
<div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagePlus14} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 14 Plus</a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 14 Plus</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebPlus14}>g</button></li>
      <li className='gray1'><button style={{backgroundColor:'rgb(214, 172, 230)' ,border:'none',color:'rgb(214, 172, 230)'}}onClick={changeImagepPlus14}>g</button></li>
      <li className='dark1'><button style={{backgroundColor:'rgb(179, 184, 230)' ,border:'none',color:'rgb(179, 184, 230)', marginLeft:'-15px'}} onClick={changeImagegPlus14}>g</button></li>
      
      <li className='white1'><button style={{backgroundColor:'rgb(rgb(179, 184, 230))' ,border:'none',color:'rgb(rgb(179, 184, 230))', marginLeft:'-10px'}} onClick={changeImagewPlus14}>g</button></li>
      <li className='white1'><button style={{backgroundColor:'rgb(248,230,145)' ,border:'none',color:'rgb(248,230,145)', marginLeft:'-10px'}} onClick={changeImageyPlus14}>g</button></li>
      <li className='white1'><button style={{backgroundColor:'rgb(237,55,29)' ,border:'none',color:'rgb(237,55,29)', marginLeft:'-10px'}} onClick={changeImagerPlus14}>g</button></li>
      
      
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>   

</li> 


    <li className="responsive-cell">

<div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={image14} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 14</a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 14</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button  style={{backgroundColor:'rgb(179, 184, 230)' ,border:'none',color:'rgb(179, 184, 230)', marginLeft:'-45px'}} onClick={changeImageb14}>g</button></li>
      <li className='gray1'><button style={{backgroundColor:'rgb(237,55,29)' ,border:'none',color:'rgb(237,55,29)', marginLeft:'-40px'}} onClick={changeImagea14}>g</button></li>
      <li className='dark1'><button style={{marginLeft:'-30px'}} onClick={changeImaged14}>g</button></li>
      
      <li className='white1'><button style={{backgroundColor:'rgb(248,230,145)' ,border:'none',color:'rgb(248,230,145)', marginLeft:'-20px'}} onClick={changeImagew14}>g</button></li>
      <li className='white1'><button style={{backgroundColor:'rgb(179,164,233)' ,border:'none',color:'rgb(179,164,233)', marginLeft:'-15px'}} onClick={changeImagep14}>g</button></li>
      <li className='white1'><button style={{marginLeft:'-15px'}} onClick={changeImages14}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>




</ul>

</div>


<div className="title"><h1>AirPods</h1>
  <p className="tp">By Apple Air Pods best price in Africa ,<a href="">www.appleafrica.com</a></p></div>

                 

<div className='airpodshome-container'>
<ul className="airrow">
<li className="responsive-cell">
  
  <div className="cardah" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src="../images/16486693.jpg" alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Air Pods Pro 2nd generation</a></h6>
      
      <p >Airpods
        <br></br>
        
      Air Pods Pro 2nd gen</p>

      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
  
  </li>

  <li className="responsive-cell">
  
  <div className="cardah" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src="../images/15952060.jpeg" alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Air Pods Pro Mag safe</a></h6>
      
      <p >Airpods
        <br></br>
        
      Air Pods Pro MagSafe</p>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
    </div>
  </div>
  
  </li>


  <li className="responsive-cell">
  
  <div className="cardah" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src="../images/16486692.jpg" alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Air Pods 3</a></h6>
      
      <p >Airpods
        <br></br>
        
      Air Pods 3</p>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
    </div>
  </div>
  
  </li>


  <li className="responsive-cell">
  
  <div className="cardah" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src="../images/15204592.jpg"alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Air Pods Max</a></h6>
      
      <p >Airpods
        <br></br>
        
      Air Pods Max</p>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
    </div>
  </div>
  
  </li>
  </ul>
</div>



<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
</div>


<div className="title"><h1>Ipads</h1> </div>

<div className='card-container'>
<ul className='trow'>

 
<li className="responsive-cell">
  
<div className="card-iph" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagepad10} alt="xyz"style={{flex:"0 0 auto ",width:"250PX", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPad(10thgen)</a></h5>
    
    <p >IPad
      <br></br>
      
      iPad(10thgen)</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebpad10}>g</button></li>
      
      <li className='dark1'><button onClick={changeImagedpad10}>g</button></li>
      
      <li className='white1'><button onClick={changeImagewpad10}>g</button></li>
      
      <li className='white1'><button onClick={changeImagespad10}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>




  
    <li className="responsive-cell">

    <div className="card-iph" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagepad9} alt="xyz"style={{flex:"0 0 auto ",width:"250PX", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPad 9(gen)</a></h5>
    
    <p >IPad
      <br></br>
      
    IPone 15 Pro Max</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebpad9}>g</button></li>
      
      
      <li className='white1'><button onClick={changeImagewpad9}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>

</div>

</li> 


    <li className="responsive-cell">

<div className="card-iph" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagepadair} alt="xyz"style={{flex:"0 0 auto ",width:"250PX", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPad air(4th gen)</a></h5>
    
    <p >IPad
      <br></br>
      
      iPad air(4th gen)</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebpadair}>g</button></li>
      <li className='gray1'><button onClick={changeImageapadair}>g</button></li>
      <li className='dark1'><button onClick={changeImagedpadair}>g</button></li>
      <li className='dark1'><button onClick={changeImageppadair}>g</button></li>
      
      
      <li className='white1'><button onClick={changeImagewpadair}>g</button></li>
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>


    <li className="responsive-cell">
  
<div className="card-iph" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagepadair5TH} alt="xyz"style={{flex:"0 0 auto ",width:"250PX", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPad Air (5th gen)</a></h5>
    
    <p >IPad
      <br></br>
      
      iPad Air (5th gen)</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebpadair5TH}>g</button></li>
      <li className='gray1'><button onClick={changeImageapadair5TH}>g</button></li>
      <li className='dark1'><button onClick={changeImagedpadair5TH}>g</button></li>
      
      <li className='white1'><button onClick={changeImagewpadair5TH}>g</button></li>
      <li className='white1'><button onClick={changeImageppadair5TH}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>


</li>






    <li className="responsive-cell">

<div className="card-iph" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagepadMINI} alt="xyz"style={{flex:"0 0 auto ",width:"250PX", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPad MINI</a></h5>
    
    <p >IPad
      <br></br>
      
      iPad MINI</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebpadMINI}>g</button></li>
      <li className='gray1'><button onClick={changeImageapadMINI}>g</button></li>
      <li className='dark1'><button onClick={changeImagedpadMINI}>g</button></li>
      
      <li className='white1'><button onClick={changeImagewpadMINI}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>


</ul>

</div>


<div className="title"><h1>Apple Mac</h1>
                 <p className="tp">Which Mac is right for you?</p></div>


<div className='airpodshome-container'>
<ul className="macrow">
<li className="responsive-cellm">
  
  <div className="card-mach" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src="../images/ipadmini/16670247macmin.jpg" alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Mac Mini M2 Pro</a></h6>
      
      <p >Mac, Mac Mini 
        </p>

      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
  
  </li>

  <li className="responsive-cellm">
  
  <div className="card-mach" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src="../images/ipadmini/16670247macp.jpg" alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Mac Mini M2</a></h6>
      
      <p >Mac,Mac Mini 
        <br></br>
        
      </p>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
    </div>
  </div>
  
  </li>


  


  <li className="responsive-cellm">
  
  <div className="card-mach" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src="../images/ipadmini/17299186ultra.jpeg" alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Mac Studio M2 Ultra </a></h6>
      
      <p >Mac,Mac Studio M2
        
        
      </p>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
    </div>
  </div>
  
  </li>

  <li className= "responsive-cellm">
  
  <div className="card-mach" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src="../images/ipadmini/17299186ultra.jpeg" alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Mac Studio M2 Max</a></h6>
      
      <p >Mac,Mac Studio M2 Max
        <br></br>
        
      </p>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
    </div>
  </div>
  
  </li>

  <li className="responsive-cellm">

   
<div className="card-mach" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagemacair15} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5>MacBook Air 15” M2</h5>
    
    <p >MacBook
      </p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebmacair15}>g</button></li>
      <li className='gray1'><button onClick={changeImageamacair15}>g</button></li>
      <li className='dark1'><button onClick={changeImagedmacair15}>g</button></li>
      <li className='dark1'><button onClick={changeImagewmacair15}>g</button></li>
      
      
     
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>   

</li> 

  <li className="responsive-cellm">

<div className="card-mach" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagemacpro } alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>MacBook Pro 14” and 16” M2 Pro 2023</a></h5>
    
    <p >Mac,MacBook pro
      </p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebmacpro}>g</button></li>
      <li className='gray1'><button onClick={changeImagewmacpro}>g</button></li>
  
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>




    <li className="responsive-cellm">

<div className="card-mach" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagemacprom1} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>MacBook Pro 14” and 16” M1 Pro 2022</a></h5>
    
    <p >Mac,MacBook pro
      </p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebmacprom1}>g</button></li>
      <li className='gray1'><button onClick={changeImageamacprom1}>g</button></li>
      
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>


<li className="responsive-cellm">

<div className="card-mach" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={imagemacprom113} alt="xyz"style={{flex:"0 0 auto ",width:"250px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>MacBook Pro 13″ M2</a></h5>
    
    <p >Mac,MacBook Pro m1
      </p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImagebmacprom113}>g</button></li>
      <li className='gray1'><button onClick={changeImageamacprom113}>g</button></li>
      
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>
  
  </ul>

  <div>
  <video src={""} width="100%" autoplay />
</div>

<div className="title"><h1>Apple Watch</h1>
                 <p className="tp">Which Apple Watch is right for you?

</p></div>



<div className='card-container'>
<ul className='trow'>

 
<li className="responsive-cell">

    <div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={image} alt="xyz"style={{flex:"0 0 auto ",width:"150px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 15 Pro Max</a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 15 Pro Max</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImageb}>g</button></li>
      <li className='gray1'><button onClick={changeImagea}>g</button></li>
      <li className='dark1'><button onClick={changeImaged}>g</button></li>
      
      <li className='white1'><button onClick={changeImagew}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>

</div>

</li> 


<li className="responsive-cell">

    <div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={image} alt="xyz"style={{flex:"0 0 auto ",width:"150px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 15 Pro Max</a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 15 Pro Max</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImageb}>g</button></li>
      <li className='gray1'><button onClick={changeImagea}>g</button></li>
      <li className='dark1'><button onClick={changeImaged}>g</button></li>
      
      <li className='white1'><button onClick={changeImagew}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>

</div>

</li> 


<li className="responsive-cell">

<div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={image} alt="xyz"style={{flex:"0 0 auto ",width:"150px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 15 Pro Max</a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 15 Pro Max</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImageb}>g</button></li>
      <li className='gray1'><button onClick={changeImagea}>g</button></li>
      <li className='dark1'><button onClick={changeImaged}>g</button></li>
      
      <li className='white1'><button onClick={changeImagew}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>

</li>


<li className="responsive-cell">
  
<div className="cardp" >
  <div className="nn"><h4>New</h4></div>
  <Link to= {"/iphone15/"+ params.id} >
  <div className="images">
  <img src={image} alt="xyz"style={{flex:"0 0 auto ",width:"150px", height:"auto", padding:"5px"}}/>
  </div>
  </Link>
  
  <div className="para">
 
    <h5><a href='/iphone15'>iPhone 15 Pro Max</a></h5>
    
    <p >IPhone
      <br></br>
      
    IPone 15 Pro Max</p>
    
    <div className="clorround" >
      <ul><li className='bll'> <button onClick={changeImageb}>g</button></li>
      <li className='gray1'><button onClick={changeImagea}>g</button></li>
      <li className='dark1'><button onClick={changeImaged}>g</button></li>
      
      <li className='white1'><button onClick={changeImagew}>g</button></li>
      
      
      
      </ul>
      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
</div>


</li>

<li className="responsive-cell">
  
  <div className="cardah" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src={image} alt="xyz"style={{flex:"0 0 auto ",width:"150px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Air Pods Pro 2nd generation</a></h6>
      
      <p >Airpods
        <br></br>
        
      Air Pods Pro 2</p>

      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
  
  </li>
  <li className="responsive-cell">
  
  <div className="cardah" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src={image} alt="xyz"style={{flex:"0 0 auto ",width:"150px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Air Pods Pro 2nd generation</a></h6>
      
      <p >Airpods
        <br></br>
        
      Air Pods Pro 2</p>

      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
  
  </li>
  <li className="responsive-cell">
  
  <div className="cardah" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src={image} alt="xyz"style={{flex:"0 0 auto ",width:"150px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Air Pods Pro 2nd generation</a></h6>
      
      <p >Airpods
        <br></br>
        
      Air Pods Pro 2</p>

      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
  
  </li>
  <li className="responsive-cell">
  
  <div className="cardah" >
    
    <Link to= {"/iphone15/"+ params.id} >
    <div className="images">
    <img src={image} alt="xyz"style={{flex:"0 0 auto ",width:"150px", height:"auto", padding:"5px"}}/>
    </div>
    </Link>
    
    <div className="para">
   
      <h6><a href='/iphone15'>Air Pods Pro 2nd generation</a></h6>
      
      <p >Airpods
        <br></br>
        
      Air Pods Pro 2</p>

      <div className='pr' style={{color:'blue'}}>රු,50000</div>
      
      
      
    </div>
  </div>
  
  </li>


</ul>
</div>

<div> 
    <h1>efwiufiuwfw</h1>
    <img src="./images/apple-macbook-pro-16-m1-16gb-ssd-512gb-grigio-siderale-2546.png " alt="wkdwodkwod"/>
    <img src="../images/iphone14/iPhone-14-Pro-Max-Apple--Purple-1.jpg"/>
</div>

    
</div>


                 












        </>





    );
}

export default Home;


