import React, { useState, useEffect } from "react";
import CropsDistribution from "./CropsDistribution";
import Form3 from "./Form3";
import { message } from "antd";
import FormScreen from "./formScreen";
import OTP from "./OTP";
import moment from "moment";

import axios from "axios";
const steps = [{ id: "1" }, { id: "2" }, { id: "3" }];
function Form() {
  const [Steps, setSteps] = useState("1");
  function handleStep(id) {
    setSteps(id);
  }
  const [Cities, setCities] = useState([]);
  function handleCities(value) {
    if (value === "Punjab") {
      setCities(Punjab);
    } else if (value === "Sindh") {
      setCities(sindh);
    } else if (value === "05") {
      setCities(Blochistan);
    } else if (value === "04") {
      setCities(KPK);
    } else if (value === "07") {
      setCities(Kashmir);
    }
  }
  const [initialValues1, setInitialValues] = useState({
    fname: "",
    contact: "",
    contact2: "",
    optionalContact: "",
    province: "",
    district: "",
    tehsil: "",
    village: "",
    cropsDiss: "",
    Land: "",
    month: "",

    cattles: "",
    targetedmandi: "",
    modeOfInvestment: "",
    percentage: "",
    cropsSale: "",
    seed: "",
    machinery: "",
    cropAdvisory: "",
  });

  const [res, setRes] = useState();
  async function handleSubmit() {
    console.log("val", initialValues1);
    const Params = {
      name: initialValues1.fname,
      phone: initialValues1.contact,
      phone1: "",
      Province: initialValues1.province.value,
      District: initialValues1.district.value,
      Tehsil: initialValues1.tehsil.value,
      Village: initialValues1.village,
      acre: initialValues1.Land,
      ModeOfInvestment: initialValues1.modeOfInvestment.value,
      investmentPercentage: initialValues1.percentage,
      targetedmandi: "asd",
      cropSale: initialValues1.cropsSale.value,
      Seed: initialValues1.seed.value,
      CropsAdvisory: initialValues1.cropAdvisory.value,
      crops: initialValues1.cropsDiss,
      cattle: initialValues1.cattles,
    };

    console.log("params", Params);
    const personalInfo = JSON.stringify(Params);
    const test = { personalInfo: Params };

    console.log("test", test);
    try {
      const { data } = await axios.post(
        "http://13.228.234.94:8080/v1/personalinof",
        {
          personalInfo: {
            name: initialValues1.fname,
            phone: initialValues1.contact,
            phone1: "",

            Province: initialValues1.province.value,
            District: initialValues1.district.value,
            Tehsil: initialValues1.tehsil.value,
            Village: initialValues1.village,
            acre: initialValues1.Land,
            ModeOfInvestment: initialValues1.modeOfInvestment.value,
            investmentPercentage: initialValues1.percentage,
            targetedmandi: initialValues1.targetedmandi.value,
            cropSale: initialValues1.cropsSale.value,
            Seed: initialValues1.seed.value,
            CropsAdvisory: initialValues1.cropAdvisory.value,
          },
          crops: initialValues1.cropsDiss,
          cattle: initialValues1.cattles,
        }
      );

      console.log("res", data);
      setRes(data);
      if (data.success === true) {
        message.success({
          content: "Submitted Successfully",
          className: "custom-class",
          style: {
            marginTop: "74vh",
          },
        });
        handleStep("4");
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log("state22", initialValues1);
  console.log("rwspomse+++++", res);

  function handleSchange(i) {
    console.log(i);
  }
  
  async function handleOTPsubmit(otp) {
    // handleStep("1")
    // const otp={
    //   p
    // }
    console.log("oooooottttpp",otp)
    try {
      const {data} = await axios.post("http://13.228.234.94:8080/v1/verify",otp
      );
      console.log("reesssss",data);
      message.success({
        content: "Verify succsessfully",
        className: "custom-class",
        style: {
          marginTop: "74vh",
        },
      });
      setInitialValues({
        fname: "",
        contact: "",
        contact2: "",
        optionalContact: "",
        province: "",
        district: "",
        tehsil: "",
        village: "",
        cropsDiss: "",
        Land: "",
        month: "",
    
        cattles: "",
        targetedmandi: "",
        modeOfInvestment: "",
        percentage: "",
        cropsSale: "",
        seed: "",
        machinery: "",
        cropAdvisory: "",
      })
      handleStep("1")
    } catch (error) {
      console.log(error.message);
    }
  }

  const [cattless, setcattless] = useState([{ Cattles: "", qt: "" }]);
  console.log("CATTT", cattless);
  function addCattles() {
    setcattless([
      ...cattless,
      {
        Cattles: "",
        qt: "",
      },
    ]);
  }
  const removeCattle = (index) => {
    const List = [...cattless];
    List.splice(index, 1);
    setcattless(List);
  };
  const [maxx, setmaxx] = useState(0);
  function handleSelectChange(i, event, name) {
    //  console.log(event.target.value,i,name)
    // console.log("i",i,"eve",moment(event[0]._d).format('MM/DD/YYYY'),"nmae",name)
    if (i < cropDistribution.length) {
      const val = cropDistribution[i].crops;
      handleCropChange(val);
    }
    handleCropChange(event);
    const values = [...cropDistribution];
    const catt = [...cattless];
    if (name === "crops") {
      values[i].crops = event;
    } else if (name === "commodities") {
      values[i].commodities = event;
    } else if (name === "area") {
      values[i].area = event;
    } else if (name === "month") {
      initialValues1.month = event;
      values[i].startDate = moment(event[0]._d).format("MM/DD/YYYY");
      values[i].endDate = moment(event[1]._d).format("MM/DD/YYYY");
    } else if (name === "min_yield") {
      values[i].min_yield = event;
    } else if (name === "max_yield") {
      values[i].max_yield = event;
    } else if (name === "Cattles") {
      catt[i].Cattles = event;
    } else if (name === "qt") {
      catt[i].qt = event;
    }
    initialValues1.cropsDiss = values;
    initialValues1.cattles = catt;
    setcropDistribution(values);
    console.log("cropsdis", cropDistribution);
  }

  const handleChange = (e) => {
    const { value, name, id } = e.target;

    setInitialValues({ ...initialValues1, [name]: value });

    console.log(value, name);

    console.log("state", initialValues1);
  };

  const [cropDistribution, setcropDistribution] = useState([
    {
      crops: "",
      commodities: "",
      area: "",
      max_yield: "",
      min_yield: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleDistributionRemove = (index) => {
    // alert(index)
    const list = [...cropDistribution];
    list.splice(index, 1);
    setcropDistribution(list);
  };
  function handleDistributionAdd() {
    setcropDistribution([
      ...cropDistribution,
      {
        crops: "",
        commodities: "",
        area: "",
        max_yield: "",
        min_yield: "",
        startDate: "",
        endDate: "",
      },
    ]);
  }
  const handleSelect = (name, value, i) => {
    //  if(value.target.name==="area"){
    //   values[value.target.id].area=value.target.value
    // }

    // handleDisAdd()

    // setInitialValues({...initialValues1,[name]:value})
    setInitialValues({ ...initialValues1, [name]: value });
    // console.log("state",initialValues1)
  };

  function handleprev(id) {
    setSteps(id);
  }
  const [valuues, setvaluues] = useState();

  const [index, setindex] = useState();
  function handleCropChange(value, index) {
    console.log("first", value);
    if (value === "Fruits") {
      // setFruits(true);
      setvaluues(fruits);
      // setSabziyaat(false);
    } else if (value === "Vegetables") {
      // setSabziyaat(true);
      setvaluues(Vegitables);
      // setFruits(false);
    } else if (value === "FoodLegumes") {
      setvaluues(FoodLegumes);
    } else if (value === "CEREALCROPS") {
      setvaluues(CEREALCROPS);
    } else if (value === "OilSeedCrops") {
      setvaluues(OilSeedCrops);
    } else if (value === "FiberCrops") {
      setvaluues(FiberCrops);
    } else if (value === "ForageCrops") {
      setvaluues(ForageCrops);
    } else if (value === "SugarCrops") {
      setvaluues(sugarCrops);
    }

    // else {
    //   setFruits(false);
    //   setSabziyaat(false);
    // }
  }
  useEffect(() => {}, [cattless, cropDistribution]);
  // function handleSubmit() {
  // setInitialValues({
  //   fname: "",
  //   contact: "",
  //   province: "",
  //   district: "",
  //   tehsil: "",
  //   village: "",
  //   Land: "",

  //   crops: "",
  //   commodities: "",
  //   cropsAmount: "",
  //   cropsCycle: "",
  //   cropscycleAmount: "",
  //   cattles: "",
  //   cattlesAmount: "",
  //   date: "",
  //   modeOfInvestment: "",
  //   percentage: "",
  //   cropsSale: "",
  //   seed: "",
  //   machinery: "",
  //   cropAdvisory: "",
  // });
  //   message.success({
  //     content: "Submitted Successfully",
  //     className: "custom-class",
  //     style: {
  //       marginTop: "74vh",
  //     },
  //   });
  //   handleStep("4");
  // }

  switch (Steps) {
    case "1":
      return (
        <FormScreen
          steps={Steps}
          handleStep={handleStep}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleCities={handleCities}
          Cities={Cities}
        />
      );

    case "2":
      return (
        <CropsDistribution
          steps={Steps}
          cropDistribution={cropDistribution}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleStep={handleStep}
          handleDistributionAdd={handleDistributionAdd}
          handleDistributionRemove={handleDistributionRemove}
          valuues={valuues}
          handleSelectChange={handleSelectChange}
          handleSchange={handleSchange}
          addCattles={addCattles}
          removeCattle={removeCattle}
          cattless={cattless}
          max={maxx}
        />
      );
    case "3":
      return (
        <Form3
          steps={Steps}
          initialValues={initialValues1}
          handleChange={handleChange}
          handleSelect={handleSelect}
          handleStep={handleStep}
          handleSubmit={handleSubmit}
          Cities={Cities}
          response={res}
        />
      );
    case "4":
      return <OTP handleStep={handleStep} number={initialValues1.contact}
      handleOTPsubmit={handleOTPsubmit} />;
  }

  return <div>{/* <FormScreen/> */}</div>;
}

export default Form;

const Punjab = [
  { value: "Abdul Hakim", label: "Abdul Hakim ", ulabel: "" },
  { value: "Ahmadpur East", label: "Ahmadpur East", ulabel: "" },
  { value: "Attock Khurd", label: "Attock Khurd", ulabel: "" },
  { value: "Bahawalpur", label: "Bahawalpur" },
  { value: "Bhakkar", label: "Bhakkar" },
  { value: "Bhalwal", label: "Bhalwal" },
  { value: "Chenab Nagar", label: "Chenab Nagar" },
  { value: "Chiniot", label: "Chiniot" },
  { value: "Chishtian", label: "Chishtian" },
  { value: "Chunian", label: "Chunian" },
  { value: "Dera Ghazi Khan", label: "Dera Ghazi Khan" },
  { value: "Dipalpur", label: "Dipalpur" },
  { value: "Faisalabad", label: "Faisalabad" },
  { value: "Gilwala", label: "Gilwala" },
  { value: "Gojra", label: "Gojra" },
  { value: "Gujranwala", label: "Gujranwala" },
  { value: "Gujrat", label: "Gujrat" },
  { value: "Harunabad", label: "Harunabad" },
  { value: "Hasilpur", label: "Hasilpur" },
  { value: "Hassan Abdal", label: "Hassan Abdal" },
  { value: "Hujra Shah Muqim", label: "Hujra Shah Muqim" },
  { value: "Jalalpur Jattan", label: "Jalalpur Jattan" },
  { value: "Jaranwala", label: "Jaranwala" },
  { value: "Jhang City", label: "Jhang City" },
  { value: "Kabirwala", label: "Kabirwala" },
  { value: "Kahror Pakka", label: "Kahror Pakka" },
  { value: "Kamalia", label: "Kamalia" },
  { value: "Kasur", label: "Kasur" },
  { value: "Khanpur", label: "Khanpur" },
  { value: "Kharian", label: "Kharian" },
  { value: "Khushab", label: "Khushab" },
  { value: "Kot Addu", label: "Kot Addu" },
  { value: "Kundian", label: "Kundian" },
  { value: "Lahore", label: "Lahore" },
  { value: "Lala Musa", label: "Lala Musa" },
  { value: "Mandi Bahauddin", label: "Mandi Bahauddin" },
  { value: "Mandi Burewala", label: "Mandi Burewala" },
  { value: "Mian Channun", label: "Mian Channun" },
  { value: "Mianwali", label: "Mianwali" },
  { value: "Multan", label: "Multan" },
  { value: "Muridke", label: "Muridke" },
  { value: "Murree", label: "Murree" },
  { value: "Muzaffargarh", label: "Muzaffargarh" },
  { value: "Nankana Sahib", label: "Nankana Sahib" },
  { value: "Okara", label: "Okara" },
  { value: "Pakpattan", label: "Pakpattan" },
  { value: "Pasrur", label: "Pasrur" },
  { value: "Pattoki", label: "Pattoki" },
  { value: "Rahimyar Khan", label: "Rahimyar Khan" },
  { value: "Rawalpindi", label: "Rawalpindi" },
  { value: "Saddiqabad", label: "Saddiqabad" },
  { value: "Sahiwal", label: "Sahiwal" },
  { value: "Sambrial", label: "Sambrial" },
  { value: "Samundri", label: "Samundri" },
  { value: "Sargodha", label: "Sargodha" },
  { value: "Shakargarh", label: "Shakargarh" },
  { value: "Shekhupura", label: "Shekhupura" },
  { value: "Shakargarh", label: "Shakargarh" },
  { value: "Shekhupura", label: "Shekhupura" },
  { value: "Shujaabad", label: "Shujaabad" },
  { value: "Sialkot City", label: "Sialkot City" },
];
const sindh = [
  { value: "Dadu", label: "Dadu" },
  { value: "Hyderabad City", label: "Hyderabad City" },
  { value: "Jacobabad", label: "Jacobabad" },
  { value: "Jamshoro", label: "Jamshoro" },
  { value: "Kandhkot", label: "Kandhkot" },
  { value: "Karachi", label: "Karachi" },
  { value: "Larkana", label: "Larkana" },
  { value: "Mian Sahib", label: "Mian Sahib" },
  { value: "Mirpur Khas", label: "Mirpur Khas" },
  { value: "Mithi", label: "Mithi" },
  { value: "Nawabshah", label: "Nawabshah" },
  { value: "Sukkur", label: "Sukkur" },
  { value: "Tando Allahyar", label: "Tando Allahyar" },
  { value: "Umarkot", label: "Umarkot" },
];
const KPK = [
  { value: "Abbottabad", label: "Abbottabad" },
  { value: "Bannu", label: "Bannu" },
  { value: "Charsadda", label: "Charsadda" },
  { value: "Chitral", label: "Chitral" },
  { value: "Dera Ismail Khan", label: "Dera Ismail Khan" },
  { value: "Hangu", label: "Hangu" },
  { value: "Karak", label: "Karak" },
  { value: "Kohat", label: "Kohat" },
  { value: "Kulachi", label: "Kulachi" },
  { value: "Mansehra", label: "Mansehra" },
  { value: "Mardan", label: "Mardan" },
  { value: "Mingaora", label: "Mingaora" },
  { value: "Nowshera", label: "Nowshera" },
  { value: "Parachinar", label: "Parachinar" },
  { value: "Peshawar", label: "Peshawar" },
  { value: "Risalpur Cantonmen", label: "Risalpur Cantonmen" },
  { value: "Saidu Sharif", label: "Saidu Sharif" },
  { value: "Swabi", label: "Swabi" },
  { value: "Timargara", label: "Timargara" },
];
const Blochistan = [
  { value: "Chaman", label: "Chaman" },
  { value: "Gwadar", label: "Gwadar" },
  { value: "Kalat", label: "Kalat" },
  { value: "Khuzdar", label: "Khuzdar" },
  { value: "Turbat", label: "Turbat" },
  { value: "Zhob", label: "Zhob" },
];
const Kashmir = [
  { value: "Kotli", label: "Kotli" },
  { value: "Muzaffarabad", label: "Muzaffarabad" },
  { value: "New Mirpur", label: "New Mirpur" },
];
const fruits = [
  { value: "Citrus", lable: "Citrus", ulabel: "??????????" },
  { value: "Mango", lable: "Mango", ulabel: "????" },
  { value: "Bannana", lable: "Bannana", ulabel: "????????" },
  { value: "Apple", lable: "Apple", ulabel: "??????" },
  { value: "Grapes", lable: "Grapes", ulabel: "??????????" },
  { value: "Pomegranate", lable: "Pomegranate", ulabel: "????????" },
  { value: "Guava", lable: "Guava", ulabel: "??????????" },
  { value: "Dates", lable: "Dates", ulabel: "??????????" },
  { value: "Apricots", lable: "Apricots", ulabel: "????????????" },
  { value: "Peach", lable: "Peach", ulabel: "??????" },
  { value: "Pear", lable: "Pear", ulabel: "??????????????" },
  { value: "Plum", lable: "Plum", ulabel: "????????????????" },
  { value: "Fig", lable: "Fig", ulabel: "??????????" },
  { value: "Almond", lable: "Almond", ulabel: "??????????" },

  { value: "Jaman", lable: "Jaman", ulabel: "????????" },
  { value: "Litche", lable: "Litche", ulabel: "????????" },
  { value: "Phalsa", lable: "Phalsa", ulabel: "??????????" },
  { value: "Walnut", lable: "Walnut", ulabel: "??????????" },
  { value: "Ber", lable: "Ber", ulabel: "??????" },
  { value: "Loquat", lable: "Loquat", ulabel: "??????????" },
  { value: "Mulbery", lable: "Mulbery", ulabel: "??????????" },
  { value: "Strawberry", lable: "Strawberry", ulabel: "??????????????????" },
  { value: "Chiko", lable: "Chiko", ulabel: "????????" },
  { value: "Coconut", lable: "Coconut", ulabel: "??????????" },
  { value: "Cherry", lable: "Cherry", ulabel: "????????" },
  { value: "Pistachio", lable: "Pistachio", ulabel: "????????" },

  { value: "Papaya", lable: "Papaya", ulabel: "??????????" },

  { value: "Persimmon", lable: "Persimmon", ulabel: "???????????? ??????" },

  { value: "Melon", lable: "Melon", ulabel: "????????????" },
  { value: "Olive", lable: "Olive", ulabel: "??????????" },
  { value: "Pine", lable: "Pine", ulabel: "???????? ????" },
  { value: "Imli", lable: "Imli", ulabel: "????????" },
  { value: "Star fruit", lable: "Star fruit", ulabel: "???????? ????????" },
  { value: "Tangerine", lable: "Tangerine", ulabel: "????????????????" },
  { value: "Rasp berry", lable: "Rasp berry", ulabel: "???? ????????" },
  { value: "Quince", lable: "Quince", ulabel: "??????????" },
];
const Vegitables = [
  { value: "Beans", lable: "Beans", ulabel: "????????????" },
  { value: "Beet", lable: "Beet", ulabel: "??????????" },
  { value: "Bitterground", lable: "Bitterground", ulabel: "??????????" },
  { value: "Brassica", lable: "Brassica", ulabel: "??????????????" },
  { value: "Brinjal", lable: "Brinjal", ulabel: "??????????" },
  { value: "Cabbage", lable: "Cabbage", ulabel: "??????????" },
  { value: "Carrot", lable: "Carrot", ulabel: "????????" },
  { value: "Cauliflower", lable: "Cauliflower", ulabel: "??????????" },
  { value: "Chilli", lable: "Chilli", ulabel: "??????" },
  { value: "Coriander", lable: "Coriander", ulabel: "??????????" },
  { value: "Cucumber", lable: "Cucumber", ulabel: "??????????" },
  { value: "Garlic", lable: "Garlic", ulabel: "????????" },
  { value: "Ginger", lable: "Ginger", ulabel: "????????" },
  { value: "Gourd", lable: "Gourd", ulabel: "????????" },
  { value: "Knoikhol", lable: "Knoikhol", ulabel: "?????????? ??????????" },
  { value: "Lemon", lable: "Lemon", ulabel: "??????????" },
  { value: "Luffa", lable: "Luffa", ulabel: "????????" },
  { value: "Mint", lable: "Mint", ulabel: "????????????" },
  { value: "Okra", lable: "Okra ", ulabel: "??????????" },
  { value: "Onion", lable: "Onion", ulabel: "????????" },
  { value: "Peas", lable: "Peas", ulabel: "??????" },
  { value: "Potato", lable: "Potato", ulabel: "??????" },
  { value: "Pumpkin", lable: "Pumpkin", ulabel: "??????" },
  { value: "Radish", lable: "Radish", ulabel: "????????" },
  { value: "Spinach", lable: "Spinach", ulabel: "????????" },
  { value: "Tomato", lable: "Tomato", ulabel: "??????????" },

  { value: "Turnip", lable: "Turnip", ulabel: "????????" },

  { value: "Yam", lable: "Yam", ulabel: "?????? ????????" },

  { value: "Arum", lable: "Arum", ulabel: "????????" },
  { value: "Bottle Gourd", lable: "Bottle Gourd", ulabel: "?????? ??????" },
  { value: "Fenugreek", lable: "Fenugreek", ulabel: "??????????" },
  { value: "Sponge gourd", lable: "Sponge gourd", ulabel: "????????" },
  { value: "Tinda gord", lable: "Tinda gord", ulabel: "??????????" },
  { value: "Sweet potato", lable: "Sweet potato", ulabel: "?????? ????????" },
  { value: "Turmeric", lable: "Turmeric", ulabel: "????????" },
  { value: "Musk Melon", lable: "Musk Melon", ulabel: "???????????? ????????????" },
];

const FiberCrops = [
  { value: "Cotton", lable: "Cotton", ulabel: "????????" },
  { value: "Jute", lable: "Jute", ulabel: "????????????" },
];
const Months = [
  { value: "January", lable: "Januaury" },
  { value: "Faburary", lable: "Faburary" },
  { value: "March", lable: "March" },
  { value: "April", lable: "April" },
  { value: "May", lable: "May" },
  { value: "June", lable: "June" },

  { value: "July", lable: "July" },
  { value: "August", lable: "August" },
  { value: "September", lable: "September" },
  { value: "October", lable: "October" },
  { value: "November", lable: "November" },
  { value: "December", lable: "December" },
];

const FoodLegumes = [
  {
    value: "Kalay Chany/Chickpea",
    lable: "Kalay Chany/Chickpea",
    ulabel: "???????? ??????/??????",
  },
  {
    value: " White Channy/ White gram",
    lable: " White Channy/ White gram",
    ulabel: "???????? ??????/ ???????? ??????",
  },
  { value: "Mung beans", lable: "Mung beans", ulabel: "???????? ????????????" },
  {
    value: "Mash/Black gram",
    lable: "Mash/Black gram",
    ulabel: "?????? / ???????? ????????",
  },
  { value: "Moong", lable: "Moong", ulabel: "????????" },
  { value: "Gram", lable: "Gram", ulabel: "????????" },

  { value: "Field pea", lable: "Field pea", ulabel: "???????? ??????" },
  { value: "Lentil", lable: "Lentil", ulabel: "??????" },
  { value: "Pigeon pean", lable: "Pigeon pean", ulabel: "?????????? ????????" },
  { value: "Lobia/Cowpea", lable: "Lobia/Cowpea", ulabel: "??????????/????????????" },

  { value: "Rawan/Cowpea", lable: "Rawan/Cowpea", ulabel: "???????? / ????????????" },
];

const CEREALCROPS = [
  { value: "Wheat", lable: "Wheat", ulabel: "????????" },
  { value: "Barley", lable: "Barley", ulabel: "??????" },
  { value: "Rice", lable: "Rice", ulabel: "????????" },
  { value: "Maize", lable: "Maize", ulabel: "????????" },
  { value: "GreatMillet", lable: "GreatMillet", ulabel: "???????? ??????????" },
  { value: "Pearl Millet", lable: "Pearl Millet", ulabel: "???????? ??????????" },
];
const OilSeedCrops = [
  {
    value: "Yellow sarsson/Rapseed",
    lable: "Yellow sarsson/Rapseed",
    ulabel: "???????? ???????????? / ??????????????",
  },
  {
    value: " Ghobi sarsoon/Rapseed",
    lable: " Ghobi sarsoon/Rapseed",
    ulabel: "???????? ???????????? / ??????????????",
  },
  {
    value: "Raya/ Indian mustard",
    lable: "Raya/ Indian mustard",
    ulabel: "???????? ??????????/ ??????????????",
  },
  {
    value: "Taranera mustard",
    lable: "Taranera mustard",
    ulabel: "?????????? ?????????? ",
  },
  { value: "Canola/ Rapseed", lable: "Canola/ Rapseed", ulabel: "????????????" },

  { value: "Peanut", lable: "Peanut", ulabel: "??????????????" },
  { value: "Sunflower", lable: "Sunflower", ulabel: "???????? ??????" },
  { value: "Maize", lable: "Maize", ulabel: "????????" },
  { value: "Olive", lable: "Olive", ulabel: "??????????" },
  { value: "Kala till", lable: "Kala till", ulabel: "?????? ???? ????" },

  {
    value: "Sufaid till/ sesame",
    lable: "Sufaid till/ sesame",
    ulabel: "???????? ???? / ????????",
  },
  { value: "Alsi/Linseed", lable: "Alsi/Linseed", ulabel: "???????? / ????????" },
  {
    value: "Guar/ Cluster bean",
    lable: "Guar/ Cluster bean",
    ulabel: "?????? / ?????????? ??????",
  },
  { value: "Cotton", lable: "Cotton", ulabel: "????????" },
];
const ForageCrops = [
  { value: "Barseem", lable: "Barseem", ulabel: "??????????????" },
  { value: " Persian Clover", lable: " Persian Clover", ulabel: "??????????  " },
  { value: "Cluster bean", lable: "Cluster bean", ulabel: "?????????? ??????" },
  { value: "Chari/Shorgum", lable: "Chari/Shorgum", ulabel: "??????" },
  { value: "Taranera mustard", lable: "Taranera mustard", ulabel: "??????" },
  { value: "Oat", lable: "Oat", ulabel: "????????" },

  { value: "Haloon", lable: "Haloon", ulabel: "????????" },
  { value: "Cheena", lable: "Cheena", ulabel: "????????" },
  { value: "Jantar", lable: "Jantar", ulabel: "??????????" },
  { value: "Mott. Grass", lable: "Mott. Grass", ulabel: "????. ????????" },
  { value: "Maize", lable: "Maize", ulabel: "??????" },
];
const sugarCrops = [
  { value: "Sugarcane", lable: "Sugarcane", ulabel: "??????" },
  { value: "Sugarbeat", lable: "Sugarbeat", ulabel: "??????????" },
  { value: "Stevia", lable: "Stevia", ulabel: "????????????" },
];
