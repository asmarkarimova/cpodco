import React from "react";
import Header from "../components/Header";
import  { MySwiper } from "../components/MySwiper";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <section className="sec1">
        <div className="container1">
          <div className="part1">
            <div className="write1">
              <h1>Episode 09: How To Create Web Page Using Bootstrap 4</h1>
              <p>By Mike Smith | 16 September 2017 | 1:30:20</p>
              <button>READ THE TRANSCRIPT</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sec2">
        <div className="container2">
          <div className="part2">
            <h1>Recent Podcasts</h1>
            <div className="dv2-1">
              <img
                src="https://preview.colorlib.com/theme/podca/images/img_1.jpg.webp"
                alt=""
              />
              <div className="wr2-1">
                <h2>Episode 08: How To Create Web Page Using Bootstrap 4</h2>
                <p>By Mike Smith / 16 September 2017 / 1:30:20</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  ipsa! Obcaecati aliquam, vel id tempora ullam rem adipisci
                  sint fugit voluptas? Omnis iusto quos labore, id sit debitis
                  minus hic.
                </p>
              </div>
            </div>
            <div className="dv2-2">
              <img
                src="https://preview.colorlib.com/theme/podca/images/img_2.jpg.webp"
                alt=""
              />
              <div className="wr2-1">
                <h2>Episode 07: How To Create Web Page Using Bootstrap 4</h2>
                <p>By Mike Smith / 16 September 2017 / 1:30:20</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores nisi distinctio minus perferendis nemo, maiores
                  ipsam aliquid corrupti iure neque, eius voluptate laudantium
                  quas exercitationem voluptatum at. Necessitatibus, in eius.
                </p>
              </div>
            </div>
            <div className="dv2-3">
              <img
                src="https://preview.colorlib.com/theme/podca/images/img_3.jpg.webp"
                alt=""
              />
              <div className="wr2-3">
                <h2>Episode 06: How To Create Web Page Using Bootstrap 4</h2>
                <p>By Mike Smith / 16 September 2017 / 1:30:20</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores nisi distinctio minus perferendis nemo, maiores
                  ipsam aliquid corrupti iure neque, eius voluptate laudantium
                  quas exercitationem voluptatum at. Necessitatibus, in eius.
                </p>
              </div>
            </div>
            <div className="dv2-4">
              <img
                src="https://preview.colorlib.com/theme/podca/images/img_4.jpg.webp"
                alt=""
              />
              <div className="wr2-4">
                <h2>Episode 05: How To Create Web Page Using Bootstrap 4</h2>
                <p>By Mike Smith / 16 September 2017 / 1:30:20</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores nisi distinctio minus perferendis nemo, maiores
                  ipsam aliquid corrupti iure neque, eius voluptate laudantium
                  quas exercitationem voluptatum at. Necessitatibus, in eius.
                </p>
              </div>
            </div>

            <div className="dv2-5">
              <img
                src="https://preview.colorlib.com/theme/podca/images/img_5.jpg.webp"
                alt=""
              />
              <div className="wr2-5">
                <h2>Episode 04: How To Create Web Page Using Bootstrap 4</h2>
                <p>By Mike Smith / 16 September 2017 / 1:30:20</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores nisi distinctio minus perferendis nemo, maiores
                  ipsam aliquid corrupti iure neque, eius voluptate laudantium
                  quas exercitationem voluptatum at. Necessitatibus, in eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec3">
        <div className="container3">
          <div className="part3">
            <h1>Behind The Mic</h1>
            <div className="imgsdv3">
              <div>
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_1.jpg.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_2.jpg.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_3.jpg.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_4.jpg.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_5.jpg.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://preview.colorlib.com/theme/podca/images/person_6.jpg.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MySwiper />
      
    </>
  );
};

export default Home;
