import React from "react";

import { Column, Row, Text, Stack, Img, Line, Button, List } from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const OnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-lato items-end justify-end mx-[auto] lg:pl-[168px] xl:pl-[192px] 2xl:pl-[217px] 3xl:pl-[260px] lg:pt-[168px] xl:pt-[192px] 2xl:pt-[217px] 3xl:pt-[260px] w-[100%]">
        <Column className="bg-white_A700 lg:p-[30px] xl:p-[34px] 2xl:p-[38px] 3xl:p-[46px] w-[93%]">
          <Row className="items-center lg:ml-[13px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] w-[84%]">
            <Column className="w-[59%]">
              <Text className="font-bold lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-gray_500 w-[auto]">
                Whats going on?
              </Text>
              <Text className="font-bold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-yellow_900 w-[auto]">
                Sorting 160 Orders
              </Text>
              <Text className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-gray_900 w-[auto]">
                <span className="text-gray_900 font-lato">56</span>
                <span className="text-gray_900 font-lato font-normal not-italic">
                  {" "}
                  remains out of
                </span>
                <span className="text-gray_900 font-lato"> 160</span>
              </Text>
              <Stack className="xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[95px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] xl:w-[108px] 2xl:w-[121px] 3xl:w-[145px] lg:w-[94px]">
                <Text className="absolute font-bold inset-x-[0] mx-[auto] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-gray_900 top-[39%] w-[max-content]">
                  35%
                </Text>
                <CircularProgressbar
                  className="absolute xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[95px] overflow-visible w-[100%]"
                  value="63"
                  name="GroupOne"
                  strokeWidth={10}
                  styles={{
                    trail: { strokeWidth: 10, stroke: "#f6f2ef" },
                    path: {
                      strokeLinecap: "square",
                      height: "100%",
                      "transform-origin": "center",
                      transform: "rotate(0deg)",
                      stroke: "#e36d29",
                    },
                  }}
                ></CircularProgressbar>
              </Stack>
              <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[56%]">
                <Img
                  src="images/img_thumbup1.png"
                  className="lg:h-[27px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[41px] lg:w-[26px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[40px]"
                  alt="thumbupOne"
                />
                <Text className="font-bold lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-yellow_900 w-[auto]">
                  Keep doing great, you’re almost there
                </Text>
              </Row>
            </Column>
            <Line className="bg-gray_300 lg:h-[243px] xl:h-[277px] 2xl:h-[312px] 3xl:h-[374px] mt-[4px] w-[1px]" />
            <Column className="lg:ml-[29px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] w-[37%]">
              <Text className="bg-gray_100 flex font-icofont font-normal items-center lg:pl-[14px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] rounded-radius50 lg:text-[51px] xl:text-[58px] 2xl:text-[66px] 3xl:text-[79px] text-shadow-ts text-yellow_900 w-[100px]">
                
              </Text>
              <Text className="font-bold font-lato lg:mt-[26px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[40px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-gray_500 w-[auto]">
                What’s next?
              </Text>
              <Text className="font-bold font-lato 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-yellow_900 w-[auto]">
                Time to Scan Orders
              </Text>
              <Text className="font-bold font-lato 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-gray_900 w-[auto]">
                There are 160 orders to be sorted.
              </Text>
              <Button className="font-bold font-lato lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-center w-[69%]">
                Start Scanning
              </Button>
            </Column>
          </Row>
          <div className="bg-yellow_900 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[13px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[3%]"></div>
          <Text className="font-bold lg:ml-[13px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-gray_500 w-[auto]">
            What else you can do?
          </Text>
          <Text className="font-bold lg:ml-[13px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-yellow_900 w-[auto]">
            First Mile
          </Text>
          <Row className="items-center lg:ml-[13px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[73%]">
            <Column className="bg-gray_100 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[17%]">
              <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-yellow_900 w-[auto]">
                Start Sorting
              </Text>
              <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                in 50 min
              </Text>
            </Column>
            <List
              className="xl:gap-[11px] 2xl:gap-[12px] 3xl:gap-[15px] lg:gap-[9px] grid grid-cols-2 min-h-[auto] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] w-[40%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 border border-gray_301 border-solid items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[100%]">
                <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                  Start Scanning
                </Text>
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                  in 50 min
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_301 border-solid items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[100%]">
                <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                  Start Scanning
                </Text>
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                  in 50 min
                </Text>
              </Column>
            </List>
            <Button
              className="font-bold xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-center w-[19%]"
              shape="RoundedBorder8"
              size="md"
              variant="OutlineGray301"
            >
              Start Scanning
            </Button>
            <Column className="bg-white_A700 border border-gray_301 border-solid items-center xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[19%]">
              <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                Start Scanning
              </Text>
              <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                in 50 min
              </Text>
            </Column>
          </Row>
          <Text className="font-bold lg:ml-[13px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-yellow_900 w-[auto]">
            Mid Mile
          </Text>
          <Row className="items-center lg:ml-[13px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[73%]">
            <Column className="bg-gray_100 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[17%]">
              <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-yellow_900 w-[auto]">
                Start Sorting
              </Text>
              <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                in 50 min
              </Text>
            </Column>
            <List
              className="xl:gap-[11px] 2xl:gap-[12px] 3xl:gap-[15px] lg:gap-[9px] grid grid-cols-4 min-h-[auto] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] w-[81%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 border border-gray_301 border-solid items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[100%]">
                <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                  Start Scanning
                </Text>
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                  in 50 min
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_301 border-solid items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[100%]">
                <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                  Start Scanning
                </Text>
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                  in 50 min
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_301 border-solid items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[100%]">
                <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                  Start Scanning
                </Text>
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                  in 50 min
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_301 border-solid items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[100%]">
                <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                  Start Scanning
                </Text>
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                  in 50 min
                </Text>
              </Column>
            </List>
          </Row>
          <Text className="font-bold lg:ml-[13px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-yellow_900 w-[auto]">
            Last Mile
          </Text>
          <Row className="items-center lg:mb-[176px] xl:mb-[201px] 2xl:mb-[226px] 3xl:mb-[271px] lg:ml-[13px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[20px] 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[73%]">
            <Column className="bg-gray_100 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[17%]">
              <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-yellow_900 w-[auto]">
                Start Sorting
              </Text>
              <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                in 50 min
              </Text>
            </Column>
            <List
              className="xl:gap-[11px] 2xl:gap-[12px] 3xl:gap-[15px] lg:gap-[9px] grid grid-cols-4 min-h-[auto] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] w-[81%]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 border border-gray_301 border-solid items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[100%]">
                <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                  Start Scanning
                </Text>
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                  in 50 min
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_301 border-solid items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[100%]">
                <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                  Start Scanning
                </Text>
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                  in 50 min
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_301 border-solid items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[100%]">
                <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                  Start Scanning
                </Text>
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                  in 50 min
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_301 border-solid items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius8 shadow-bs w-[100%]">
                <Text className="font-bold mt-[3px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-gray_900 w-[auto]">
                  Start Scanning
                </Text>
                <Text className="font-normal mt-[3px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-gray_501 w-[auto]">
                  in 50 min
                </Text>
              </Column>
            </List>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default OnePage;
