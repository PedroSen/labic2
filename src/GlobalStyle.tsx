import { createGlobalStyle } from "styled-components";
import fundo from "./../public/assets/images/LABIC_BRASIL/background_labic.png";

export const GlobalStyle = createGlobalStyle`
    :root {
        //--gradient: linear-gradient(90deg, #370e12, #932121, #ff8e44);
        --image: url(${fundo});
        --blue-1: #16d5ef;
        --blue-2: #17c2cb69;
        --purple-1: #8616ea;
        --purple-2: #78009c;
        --purple-3: #7342f5;
        --purple-4: #8716ea59;
        --white-1: #ffffff7b;
        --white-2: #ffffff;
        --pink-1: #f83efb;
        --yellow-1: #ffde1c;
        --yellow-2: #ffe11b;
        --black: #262626;
        --poppins: 'Poppins', sans-serif;
        --open-sans: 'Open Sans', sans-serif;
    }

    html{
    overflow-y: scroll;
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video,
    input {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    body {
        line-height: 1;
        background: var(--black);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;
