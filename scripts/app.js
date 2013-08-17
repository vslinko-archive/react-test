require(["React", "jsx!components/test-page/test-page"], function (React, TestPage) {
  React.renderComponent(
    <TestPage />,
    document.getElementById("test-page")
  );
});
