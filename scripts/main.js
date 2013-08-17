require.config({
  baseUrl: "/",
  deps: ["jsx!scripts/app"],
  paths: {
    React: "//cdnjs.cloudflare.com/ajax/libs/react/0.4.1/react.min",
    JSXTransformer: "//cdnjs.cloudflare.com/ajax/libs/react/0.4.1/JSXTransformer",
    jsx: "https://raw.github.com/seiffert/require-jsx/master/jsx"
  },
  shim: {
    JSXTransformer: {
      exports: "JSXTransformer"
    }
  }
});
