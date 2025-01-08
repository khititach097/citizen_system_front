import React from "react";
import { Layout as AndLayout, Divider, Typography } from "antd";
import { Col, Row } from "antd";
import Image from "next/image";
import { PiTwitterLogo } from "react-icons/pi";
import { FiFacebook, FiLinkedin } from "react-icons/fi";

const { Footer } = AndLayout;
const { Text } = Typography;

const FooterComponent = () => {
  return (
    <Footer className="bg-[#0F0F0F] text-white px-20 py-20">
      <Row className="">
        <Col span={12} className="">
          <div className="flex flex-col gap-8">
            <Image
              src="/logo/BED-ROCK-Logo.svg"
              width={160}
              height={45}
              alt="BED-ROCK-Logo"
            />
            <div className="max-w-[300px]">
              <span>
                Provide accessible, affordable, and advanced location insights
                with our Geospatial Location Intelligence Platform and AI
                technologies
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <Image
                src="/logo/PTTEP-Logo.svg"
                width={45}
                height={45}
                alt="PTTEP-Logo"
              />
              <Divider
                type="vertical"
                className="border-white"
                style={{ height: "30px" }} // Use borderWidth instead of fontSize for the divider line thickness
              />
              <Image
                src="/logo/ARV-Logo.svg"
                width={65}
                height={45}
                alt="ARV-Logo"
              />
            </div>
          </div>
        </Col>
        <Col span={4} className="flex flex-col gap-3">
          <span className="text-xl">Contact</span>
          <span className="leading-8">
            <a href="mailto:email@locable.co.th" className="hover:underline">
              email@locable.co.th
            </a>
            <br />
            <a href="tel:+66971748816" className="hover:underline">
              +6697 174 8816
            </a>
          </span>
        </Col>
        <Col span={8} className="flex flex-col gap-3 ">
          <span className="text-xl">Office Info</span>
          <span className="leading-8">
            Bedrock Analytics Co., Ltd. 304 Vanit Place Aree (Building A), 25th
            Floor, Unit 2501, Phaholyothin Road, Samsen Nai, Phaya Thai, Bangkok
            10400
          </span>
        </Col>
      </Row>
      <Divider className="border-white" />
      <Row>
        <Col span={12} className="">
          <span>Copyright © 2022 by Bedrock</span>
        </Col>
        <Col span={12}>
          <div className="flex w-full justify-end items-end gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiTwitterLogo size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
