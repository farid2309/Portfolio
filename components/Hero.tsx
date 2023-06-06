"use client";
import Image from "next/image";
import React from "react";
import heroImage from "@/public/hero.jpg";
import heroImage1 from "@/public/hero1.jpg";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import { shadows } from "@mui/system";

const Hero = () => {
  return (
    <div className="h-[100vh] w-[100vw] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-1 md:gap-3 xl:gap-5">
      {/* Azerbazalt */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 100,
        }}
        transition={{
          duration: 1.4,
        }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            padding: 4,
            minWidth: 350,
            minHeight: 900,
            px: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: 5,
          }}
        >
          <motion.h1
            initial={{}}
            whileHover={{
              color: "#1b1c1e",
            }}
            className="text-md md:text-2xl font-black tracking-wider uppercase text-red-700 text-center cursor-pointer"
          >
            AZERBAZALT JSA
          </motion.h1>
          <motion.div
            initial={{
              scaleX: 1,
            }}
            whileHover={{
              scaleX: 10,
            }}
            transition={{
              duration: 2,
            }}
            className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
          ></motion.div>
          <h2 className="text-md md:text-1xl font-thin tracking-wider uppercase text-[#1b1c1e]">
            Assistant to the Board
          </h2>
          <h3
            className="text-md md:text-xs font-black 
				 uppercase text-[#1b1c1e] pb-6"
          >
            November 2022 - PRESENT
          </h3>
          <ul>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Assisted board members in coordinating and organizing meetings,
                including preparing agendas, scheduling appointments, and
                managing logistics.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Conducted thorough research and analysis on key business topics
                and presented findings to board members, providing valuable
                insights to support decision-making processes.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Drafted and prepared high-quality reports, presentations, and
                correspondence for the board, ensuring accuracy, clarity, and
                professionalism.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Managed confidential and sensitive information with the utmost
                discretion, maintaining strict confidentiality and adhering to
                data protection protocols.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
          </ul>
        </Card>
      </motion.div>

      {/* Universitas International */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 100,
        }}
        transition={{
          duration: 1.1,
        }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            padding: 1,
            minWidth: 350,
            minHeight: 900,
            px: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: 5,
          }}
        >
          <motion.h1
            initial={{}}
            whileHover={{
              color: "#1b1c1e",
            }}
            className="text-sm md:text-2xl font-black tracking-wider uppercase text-red-700 text-center cursor-pointer"
          >
            UNIVERSITAS INTERNATIONAL LLC
          </motion.h1>

          <motion.div
            initial={{
              scaleX: 1,
            }}
            whileHover={{
              scaleX: 10,
            }}
            transition={{
              duration: 2,
            }}
            className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
          ></motion.div>
          <h2 className="text-md md:text-1xl font-thin tracking-wider uppercase text-[#1b1c1e] text-center">
            Business Development Specialist
          </h2>
          <h3
            className="text-md md:text-xs font-black 
				 uppercase text-[#1b1c1e] pb-6"
          >
            December 2021 - October 2022
          </h3>
          <ul>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Analyzed complex problems, meticulously collected data, and
                synthesized findings to derive accurate conclusions.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Demonstrated agility and responsiveness in meeting customer
                needs, ensuring utmost satisfaction and resolving issues
                promptly.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Assisted in the seamless onboarding of new hires through
                comprehensive orientation and effective training programs.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Managed confidential and sensitive information with the utmost
                discretion, maintaining strict confidentiality and adhering to
                data protection protocols.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
          </ul>
        </Card>
      </motion.div>
      {/* EU4Culture*/}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 100,
        }}
        transition={{
          duration: 0.9,
        }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            padding: 4,
            minWidth: 400,
            minHeight: 900,
            px: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: 5,
          }}
        >
          <motion.h1
            initial={{}}
            whileHover={{
              color: "#1b1c1e",
            }}
            className="text-md md:text-2xl font-black tracking-wider uppercase text-red-700 text-center cursor-pointer"
          >
            EU4Culture
          </motion.h1>
          <motion.h1
            initial={{}}
            whileHover={{
              color: "#1b1c1e",
            }}
            className="text-md md:text-2xl font-black tracking-wider uppercase text-red-700 text-center cursor-pointer"
          >
            GOETHE INSTITUTE GRANT PROJECT
          </motion.h1>

          <motion.div
            initial={{
              scaleX: 1,
            }}
            whileHover={{
              scaleX: 10,
            }}
            transition={{
              duration: 2,
            }}
            className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
          ></motion.div>
          <h2 className="text-md md:text-1xl font-thin tracking-wider uppercase text-[#1b1c1e] text-center">
            Accountant
          </h2>
          <h3
            className="text-md md:text-xs font-black 
				 uppercase text-[#1b1c1e] pb-6"
          >
            July 2021 - November 2022
          </h3>
          <ul>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Expertly interpreted and conveyed general accounting principles,
                meticulously adhering to laws and regulations governing
                financial operations.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Ensured financial accuracy by skillfully posting journal
                entries, meticulously analyzing account information for
                meticulous compilation.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Skillfully reconciled financial discrepancies, employing
                diligent analysis to identify and resolve discrepancies
                promptly.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Designed and implemented robust controls to meticulously track
                financial records and safeguard valuable assets.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
          </ul>
        </Card>
      </motion.div>
      {/* ASMART Creative Hub */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 100,
        }}
        transition={{
          duration: 0.9,
        }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            padding: 4,
            minWidth: 400,
            minHeight: 900,
            px: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: 5,
          }}
        >
          <motion.h1
            initial={{}}
            whileHover={{
              color: "#1b1c1e",
            }}
            className="text-md md:text-2xl font-black tracking-wider uppercase text-red-700 text-center cursor-pointer"
          >
            ASMART CREATIVE HUB LLC
          </motion.h1>

          <motion.div
            initial={{
              scaleX: 1,
            }}
            whileHover={{
              scaleX: 10,
            }}
            transition={{
              duration: 2,
            }}
            className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
          ></motion.div>
          <h2 className="text-md md:text-1xl font-thin tracking-wider uppercase text-[#1b1c1e] text-center">
            Financial Advisor
          </h2>
          <h3
            className="text-md md:text-xs font-black 
				 uppercase text-[#1b1c1e] pb-6"
          >
            June 2018 - September 2018
          </h3>
          <ul>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Delivered exceptional customer service, proactively addressing
                needs and resolving complex problems with efficiency.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Actively participated in ongoing training programs, continually
                enhancing professional expertise and knowledge base.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Methodically identified and troubleshooted minor issues while
                diligently reporting critical technical challenges.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Exhibited exceptional multitasking abilities, adeptly managing
                diverse responsibilities with adaptability and flexibility.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
          </ul>
        </Card>
      </motion.div>
      {/* KPMG LLP */}
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 100,
        }}
        transition={{
          duration: 1.1,
        }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            padding: 4,
            minWidth: 400,
            minHeight: 900,
            px: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: 5,
          }}
        >
          <motion.h1
            initial={{}}
            whileHover={{
              color: "#1b1c1e",
            }}
            className="text-md md:text-2xl font-black tracking-wider uppercase text-red-700 text-center cursor-pointer"
          >
            KPMG LLP
          </motion.h1>

          <motion.div
            initial={{
              scaleX: 1,
            }}
            whileHover={{
              scaleX: 10,
            }}
            transition={{
              duration: 2,
            }}
            className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
          ></motion.div>
          <h2 className="text-md md:text-1xl font-thin tracking-wider uppercase text-[#1b1c1e] text-center">
            Intern
          </h2>
          <h3
            className="text-md md:text-xs font-black 
				 uppercase text-[#1b1c1e] pb-6"
          >
            June 2015 - August 2015
          </h3>
          <ul>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Collaborated with executives in crafting compelling campaign and
                project presentations, effectively communicating key messages.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Meticulously documented processes, utilizing Microsoft Word and
                Visio to ensure comprehensive and accurate records.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
            <li>
              <h2 className="text-xs md:text-sm font-medium tracking-wider uppercase text-[#1b1c1e] text-center">
                Efficiently acquired data from primary and secondary sources,
                skillfully employing analysis and trending for insightful
                decision-making.
              </h2>
            </li>
            <motion.div
              initial={{
                scaleX: 1,
              }}
              whileHover={{
                scaleX: 10,
              }}
              transition={{
                duration: 2,
              }}
              className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
            ></motion.div>
          </ul>
        </Card>
      </motion.div>
      {/* Picture */}
      <div className="flex justify-center items-center relative z-50">
        <Card
          sx={{
            padding: 4,
            minWidth: 400,
            minHeight: 900,
            px: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            boxShadow: 5,
          }}
        >
          <motion.div
            initial={{
              scaleX: 1,
            }}
            whileHover={{
              scaleX: 10,
            }}
            transition={{
              duration: 2,
            }}
            className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3 relative z-50"
          ></motion.div>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 100,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
            className="flex justify-center items-center relative z-50"
          >
            <Image
              className="drop-shadow-xl hover:drop-shadow-2xl hover:scale-110"
              src={heroImage}
              alt="#"
            ></Image>
          </motion.div>

          <motion.div
            initial={{
              scaleX: 1,
            }}
            whileHover={{
              scaleX: 10,
            }}
            transition={{
              duration: 2,
            }}
            className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3 relative z-50"
          ></motion.div>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
