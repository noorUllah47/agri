import React from "react";
import { Carousel } from "antd";
import group from "../assets/Group.png";
import group1 from "../assets/seconds.png";
import group2 from "../assets/grp3.png";

function Slider({executeScroll}) {
  return (
    <div className="antCarousel">
      <Carousel effect="fade">
        <div className="carouseldiv  ">
          <div className="p-3 p-md-4 p-lg-5  contentstye " style={contentStyle}>
            <div>
              <h2 className="caruselp mb-3  ">
                Sustainable & Smart Agriculture
                <br />
                Trading Platform
                {/* <hr className="spline mt-lg-5"></hr> */}
                {/* <p className="carouselptag normalp pt-lg-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
                <br /> tempus libero ornare nulla aenean vulputate malesuada.
              </p> */}
                <button onClick={executeScroll} className="registerNow mt-lg-4">Register Now</button>
              </h2>
            </div>

            <div>
              <img className="bgimage1" width="85%" src={group} />
            </div>
          </div>
        </div>
        <div className="carouseldiv ">
          <div className="p-3 p-md-4 p-lg-5 contentstye" style={contentStyle}>
            <div>
              <h2 style={{ color: "#256834" }} className="caruselp mb-3 ">
                Empowering Farmers <br />
                with Technology
                {/* <hr className="spline mt-lg-5"></hr> */}
                {/* <p className="carouselptag normalp pt-lg-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
                <br /> tempus libero ornare nulla aenean vulputate malesuada.
              </p> */}
                <button className="registerNow mt-lg-4">Register Now</button>
              </h2>
              {/* <p className="carouselptag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
                <br /> tempus libero ornare nulla aenean vulputate malesuada.
              </p> */}
            </div>
            <div>
              <img className="bgimage1" width="85%" src={group1} />
            </div>
          </div>
        </div>

        <div className="carouseldiv ">
          <div className="p-3 p-md-5 p-lg-5 contentstye" style={contentStyle}>
            <div>
              {/* <img className="bgimage1" src="https://eagri-images.s3.ap-southeast-1.amazonaws.com/Group%2018399.png" /> */}

              <h2 className="caruselp mb-3 ">
                Making Farm to Fork a <br />
                Reality
                {/* <hr className="spline mt-lg-5"></hr> */}
                {/* <p className="carouselptag normalp pt-lg-4">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
<br /> tempus libero ornare nulla aenean vulputate malesuada.
</p> */}
                <button className="registerNow  ">Register Now</button>
              </h2>

              {/* <p className="carouselptag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in{" "}
                <br /> tempus libero ornare nulla aenean vulputate malesuada.
              </p> */}
            </div>
            <div>
              <img className="bgimage1" width="85%" src={group2} />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
const contentStyle = {
  Height: "auto",
  color: "#fff",
  lineHeight: "160px",
  // textAlign: 'center',
  // background: "url(https://image.shutterstock.com/image-photo/nature-background-table-wood-product-260nw-285662423.jpg)",
  // marginTop:"320px",

  backgroundSize: "cover",
  margin: "0 auto",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
};

