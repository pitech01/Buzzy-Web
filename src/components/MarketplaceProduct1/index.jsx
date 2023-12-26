import React from "react";

import { Img, Text } from "components";

const MarketplaceProduct1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[172px] md:h-auto object-cover w-full"
          alt="image"
          src={props?.image}
        />
        <div className="flex flex-col gap-2 items-start justify-start w-auto">
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            <div className="flex flex-row items-start justify-start w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_signal.svg"
                alt="signal"
              />
              <Img
                className="h-4 w-4"
                src="images/img_signal.svg"
                alt="signal_One"
              />
              <Img
                className="h-4 w-4"
                src="images/img_signal.svg"
                alt="signal_Two"
              />
              <Img
                className="h-4 w-4"
                src="images/img_signal.svg"
                alt="signal_Three"
              />
              <Img
                className="h-4 w-4"
                alt="signal_Four"
                src={props?.signalfive}
              />
            </div>
            <Text
              className="text-blue_gray-400 text-xs w-auto"
              size="txtPublicSansRegular12"
            >
              {props?.text56767}
            </Text>
          </div>
          <Text
            className="leading-[20.00px] max-w-[202px] md:max-w-full text-gray-900 text-sm"
            size="txtPublicSansRegular14Gray900"
          >
            {props?.textdescription}
          </Text>
          <div className="flex flex-row gap-1 items-start justify-start w-auto">
            {!!props?.text86599 ? (
              <Text
                className="line-through text-blue_gray-300 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray300"
              >
                {props?.text86599}
              </Text>
            ) : null}
            <Text
              className="text-blue-500 text-sm w-auto"
              size="txtPublicSansSemiBold14Blue500"
            >
              {props?.text44212}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

MarketplaceProduct1.defaultProps = {
  image: "images/img_image_20.png",
  signalfive: "images/img_signal.svg",
  text56767: "(798)",
  textdescription: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
  text44212: "N80",
};

export default MarketplaceProduct1;
