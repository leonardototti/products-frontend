import { Card, Col, Row, Skeleton } from "antd";
import { EditTwoTone, DeleteTwoTone } from "@ant-design/icons";

export default function ProductListLoading() {
  const { Meta } = Card;

  return (
    <Row gutter={[20, 20]}>
      {Array.from({ length: 12 }).map((_, index) => (
        <Col key={index} xs={24} md={12} lg={6}>
          <Card
            loading
            cover={
              <Skeleton.Node active style={{ width: "100%", height: 280 }} />
            }
            actions={[
              <div>
                <EditTwoTone
                  key="edit"
                  style={{ fontSize: 18 }}
                  twoToneColor={"#032d8a"}
                />
              </div>,
              <div>
                <DeleteTwoTone
                  key="remove"
                  style={{ fontSize: 18 }}
                  twoToneColor={"#ff4d4f"}
                />
              </div>,
            ]}
          >
            <Meta title="" description="" />
          </Card>
        </Col>
      ))}
    </Row>
  );
}
