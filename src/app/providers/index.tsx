import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, RouterProviderProps } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { App, ConfigProvider } from "antd";
import { HappyProvider } from "@ant-design/happy-work-theme";

import pt_BR from "antd/locale/pt_BR";

const userPrefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

interface IProvidersProps {
  router: RouterProviderProps["router"];
  client: QueryClient;
}

export const Providers = ({ router, client }: IProvidersProps) => {
  return (
    <QueryClientProvider client={client}>
      <ConfigProvider
        locale={pt_BR}
        theme={{
          token: {
            colorPrimary: "#032d8a",
            borderRadius: 6,
            controlHeight: 45,
            fontFamily:
              "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          },
          components: {
            Form: {
              marginLG: 15,
              colorTextLabel: "#a6a6a6",
            },
            Input: {
              paddingInline: 18,
              colorTextPlaceholder: "#a6a6a6",
            },
            InputNumber: {
              paddingInline: 18,
              colorTextPlaceholder: "#a6a6a6",
            },
            Button: {
              paddingInlineLG: 35,
              paddingInline: 30,
              paddingInlineSM: 20,
              primaryShadow: "none",
            },
            Message: {
              contentPadding: 15,
            },
          },
        }}
      >
        <HappyProvider disabled={userPrefersReducedMotion}>
          <App>
            <RouterProvider router={router} />
          </App>
        </HappyProvider>
      </ConfigProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
