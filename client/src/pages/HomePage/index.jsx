import React from "react";
import "../HomePage/index.scss";
import { Col, Row, Tabs, Input } from "antd";
import { Card } from "antd";
import { useEffect, useState } from "react";
import { getDataAll } from "../../services";
import { Helmet } from "react-helmet";

const { Meta } = Card;

const HomePage = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getDataAll().then((res) => {
      setProduct(res.data.data);
    });
  }, []);

  const handleSearch = (value) => {
    getDataAll().then((res) => {
      setProduct(
        res.data.data.filter((q) =>
          q.title.toLowerCase().includes(value.toLowerCase().trim())
        )
      );
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ColoShop | Shopping</title>
      </Helmet>
      <div className="home-page">
        <div className="container">
          <div className="home-inner">
            <p>SPRING / SUMMER COLLECTION 2017</p>
            <h1>Get up to 30% Off New Arrivals</h1>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="images">
          <div className="women">
            <button className="women-btn">WOMEN`S</button>
          </div>
          <div className="accessories">
            <button className="accss-btn">ACCESSORIES</button>
          </div>
          <div className="men">
            <button className="men-btn">MEN`S</button>
          </div>
        </div>

        <section id="card">
          <h1>New Arrivals</h1>
          <div className="tab">
            <Tabs
              onChange={onChange}
              type="card"
              items={new Array(3).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                  label: `Tab ${id}`,
                  key: id,
                  children: `${id}`,
                };
              })}
            />
          </div>
          <div className="inp">
            <Input
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search here"
              style={{
                width: "500px",
                border: "1px solid black",
                marginRight: "640px",
              }}
            />
          </div>
          <Row gutter={16}>
            {product &&
              product.map((p) => {
                return (
                  <Col
                    className="gutter-row"
                    span={6}
                    xs={24}
                    md={12}
                    lg={4}
                    key={p._id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-beetween",
                      marginLeft: "30px",
                    }}
                  >
                    <Card
                      hoverable
                      style={{
                        width: 200,
                        marginTop: "30px",
                      }}
                      cover={<img alt="example" src={p.imageUrl} />}
                    >
                      <Meta title={p.title} price={p.price} />
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </section>
      </div>
    </>
  );
};

export default HomePage;
