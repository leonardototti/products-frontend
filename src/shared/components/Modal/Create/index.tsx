import { createProduct } from "@/shared/data/products";
import { ICreateProductDTO } from "@/shared/interfaces/IProduct";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  App,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Switch,
  Upload,
} from "antd";
import type { GetProp, UploadProps } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";

type UploadFile = Parameters<GetProp<UploadProps, "onChange">>[0]["file"];

export interface ICreateModalRef {
  openModal: () => void;
}

const CreateModal = forwardRef<ICreateModalRef, unknown>((_props, ref) => {
  const queryClient = useQueryClient();
  const { message } = App.useApp();
  const [isOpen, setIsOpen] = useState(false);

  const { Dragger } = Upload;

  const [form] = Form.useForm<
    ICreateProductDTO & { image: UploadFile["originFileObj"] }
  >();

  const validateUpload = (file: UploadFile) => {
    if (!file.type || !file.size) {
      return false;
    }

    const isValidUploadFile = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ].includes(file.type);

    if (!isValidUploadFile) {
      message.error("Você só pode enviar imagens JPG, JPEG, PNG ou GIF!");
    }

    const isValidFileSize = file.size / 1024 / 1024 < 5;

    if (!isValidFileSize) {
      message.error("A imagem deve ser menor que 5MB!");
    }

    return isValidUploadFile && isValidFileSize;
  };

  const { mutateAsync: createProductFn, isPending } = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: createProduct,
    onError: error => {
      process.env.NODE_ENV === "development" && console.error(error);
      message.error("Erro ao criar produto");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getAllProducts"] });

      message.success("Produto criado com sucesso!");
      setIsOpen(false);
    },
  });

  useImperativeHandle(ref, () => ({
    openModal: () => setIsOpen(true),
  }));

  return (
    <Modal
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      title="Novo produto"
      centered
      keyboard={false}
      maskClosable={false}
      width={480}
      destroyOnClose
      okText="Salvar"
      closable={!isPending}
      okButtonProps={{ loading: isPending }}
      onOk={() => form.submit()}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={values => createProductFn(values)}
        clearOnDestroy
        disabled={isPending}
      >
        <Form.Item name="image" label="Imagem">
          <Dragger
            accept="image/jpeg,image/pjpeg,image/png,image/gif"
            maxCount={1}
            listType="picture"
            beforeUpload={() => false}
            onChange={info => {
              let isValid = validateUpload(info.file);

              if (isValid) {
                form.setFieldValue("image", info.file);
              } else {
                form.resetFields(["image"]);
              }
            }}
          >
            <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
              <div className="ant-upload-select-picture-card">
                <span className="ant-upload-text">Selecione uma imagem</span>
              </div>
            </div>
          </Dragger>
        </Form.Item>
        <Form.Item
          name="name"
          label="Nome"
          rules={[{ required: true, message: "Campo obrigatório" }]}
        >
          <Input placeholder="Nome do seu produto" maxLength={120} />
        </Form.Item>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Preço"
              rules={[{ required: true, message: "Campo obrigatório" }]}
            >
              <InputNumber<number>
                formatter={value =>
                  `R$ ${value}`
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    .replace(/\.(\d{2})$/, ",$1")
                }
                parser={value =>
                  value
                    ?.replace(/R\$\s?/, "")
                    .replace(/\./g, "")
                    .replace(/,/, ".") as unknown as number
                }
                placeholder="R$ 0"
                maxLength={14}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="quantity"
              label="Quantidade"
              rules={[{ required: true, message: "Campo obrigatório" }]}
            >
              <InputNumber
                placeholder="Estoque"
                min={0}
                maxLength={6}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="is_active"
              label="Ativo"
              valuePropName="checked"
              style={{ marginBottom: 0 }}
            >
              <Switch
                checkedChildren="Sim"
                unCheckedChildren="Não"
                defaultChecked
                style={{ marginTop: -20 }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
});

export default CreateModal;
