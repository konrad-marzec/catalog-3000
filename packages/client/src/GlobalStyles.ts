import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  :root {
    --primary-outline: rgba(24, 144, 255, .2);
    --primary-hover: #40a9ff;
    --primary: #1890ff;

    --muted: rgba(0, 0, 0, 0.45);
    --muted-light: #d9d9d9;

    --main-bg-color-from: #f4f0f3;
    --main-bg-color-to: #eaf3f7;
    --background: #ffffff;

    --list-hover: #fafafa;
    --shadow: rgba(62, 118, 244, 0.14);
  }

  * {
    box-sizing: border-box;
  }



  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: auto;
    font-family: 'Monospaced Number', 'Chinese Quote', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 21px;
  }

  body {
    background: var(--main-bg-color-from);
    background: linear-gradient(
      0deg,
      var(--main-bg-color-from) 0%,
      var(--main-bg-color-to) 100%
    );
  }

  html,
  body,
  div,
  a,
  i,
  button,
  select,
  option,
  optgroup,
  hr,
  br {
    user-select: none;
    cursor: default;
  }

  .filter-tools-submenu {
    .ant-menu-sub {
      min-width: auto
    }
  }

  canvas {
    cursor: inherit;
  }
`;
