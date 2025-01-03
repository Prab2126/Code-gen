let buttons = document.querySelectorAll(".side-button-area button");
let asideArea = document.querySelector(".side-button-area");
let Buttonbackground = document.createElement("div");
let allInputsValue = document.querySelectorAll("input");

//svgStart

let svgValue = document.querySelectorAll("svg");

function copyingFuncion() {
  let clipboardClass = document.querySelectorAll(".Clipboard");
  clipboardClass.forEach((value) => {
    let copyMessage = setInterval(() => {
      value.innerHTML = "Code Copyed";
      value.style.color = "hsl(338.24deg 100% 50%)";
    }, 0);
    setTimeout(() => {
      clearInterval(copyMessage);
      value.innerHTML = "Code copy";
      value.style.color = "hsl(41deg 100% 38.09%)";
    }, 1000);
  });
}

let all_code_bd = document.querySelector(".all-border-copy");
svgValue[0].addEventListener("click", () => {
  navigator.clipboard.writeText(all_code_bd.innerText);
  copyingFuncion();
});
let all_code_Radius = document.querySelector(".propery");
svgValue[1].addEventListener("click", () => {
  navigator.clipboard.writeText(all_code_Radius.innerText);
  copyingFuncion();
});
//svgEnd

//all input value
allInputsValue.forEach((value) => {
  value.value = 0;
});

//siding grid
document.querySelectorAll(".same-title").forEach((value) => {
  value.title = "Click to use tools";
  value.addEventListener("click", () => {
    value.parentElement.classList.toggle("same-box-js");
  });
});

Buttonbackground.classList.add("Button-background-js");
asideArea.appendChild(Buttonbackground);

buttons.forEach((value) => {
  value.addEventListener("click", () => {
    Buttonbackground.classList.add("toggle-button-js");
  });
});

function allButton(...allToggle) {
  allToggle.forEach((value) => {
    buttons[value].classList.remove("toggle-button-js");
  });
}

let main1 = document.querySelector(".main1");
let main2 = document.querySelector(".main2");
let one = () => {};
buttons[0].addEventListener("click", () => {
  buttons[0].classList.add("toggle-button-js");
  allButton(1);
  Buttonbackground.style.top = "20px";
  main1.classList.remove("main1-js-toggle");
  main2.classList.remove("main2-js-toggle");
});
buttons[1].addEventListener("click", () => {
  main2.classList.add("main2-js-toggle");
  main1.classList.add("main1-js-toggle");
  allButton(0);
  one();
  buttons[1].classList.add("toggle-button-js");

  Buttonbackground.style.top = "85px";
});
//     buttons[2].addEventListener("click",()=>{
//         buttons[2].classList.add("toggle-button-js");
// one();
// allButton(0,1,3);
// Buttonbackground.style.top="151px";
//     });
//     buttons[3].addEventListener("click",()=>{
//         buttons[3].classList.add("toggle-button-js");
// one();
// allButton(0,2,1);
//         Buttonbackground.style.top="216px";

//     });

// start of button

//all input ,select are selected
let Btn_Shadowinset = document.querySelector("#inset-off-toggle");
let btn_shadowX = document.querySelector("#shadow-X");
let btn_shadowY = document.querySelector("#shadow-Y");
let btn_shadowBlur = document.querySelector("#shadow-blur");
let btn_shadowRange = document.querySelector("#shadow-range");
let btn_shadowColor = document.querySelector("#shadow-color");
let btn_textSize = document.querySelector("#text-size");
let btn_boldText = document.querySelector("#bold-text");
let btn_letterGap = document.querySelector("#letter-gap");
let btn_textGap = document.querySelector("#text-gap");
let btn_textColor = document.querySelector("#text-color");
let btn_padding = document.querySelector("#padding");
let btn_paddingTop = document.querySelector("#padding-top");
let btn_paddingRight = document.querySelector("#padding-right");
let btn_paddingBottom = document.querySelector("#padding-bottom");
let btn_paddingLeft = document.querySelector("#padding-left");
let btn_borderTop = document.querySelector("#border-top");
let btn_borderRight = document.querySelector("#border-right");
let btn_borderBottom = document.querySelector("#border-bottom");
let btn_borderLeft = document.querySelector("#border-left");
let btn_borderWidth = document.querySelector("#border-width");
let btn_borderType = document.querySelector("#border-type");
let btn_borderColor = document.querySelector("#border-color");
let btn_width = document.querySelector("#width");
let btn_height = document.querySelector("#height");
let btn_Backgroundcolor = document.querySelector("#background-color");
let btn_border_radius = document.querySelector("#border-radius");
let btn_border_radius_top_left = document.querySelector(
  "#border-radius-top-left"
);
let btn_border_radius_top_right = document.querySelector(
  "#border-radius-top-right"
);
let btn_border_radius_bottom_left = document.querySelector(
  "#border-radius-bottom-right"
);
let btn_border_radius_bottom_right = document.querySelector(
  "#border-radius-bottom-left"
);
let hidden = document.querySelector("#hidden").children[0];

hidden.addEventListener("click", (e) => {
  e.target.parentElement.classList.toggle("overflowHidden");
});
//selected button
let btn_preview = document.querySelector(".btn-preview");

//extra thing select

//shadows
let btn_shadowInsetPreview = document.querySelector(".shadow-preview-Inset");
let shadow_previewX = document.querySelector(".shadow-preview-x");
let shadow_previewY = document.querySelector(".shadow-preview-y");
let shadow_previewBlur = document.querySelector(".shadow-preview-blur");
let shadow_previewRange = document.querySelector(".shadow-preview-spread");
let shadow_previewColor = document.querySelector(".shadow-preview-color");

//text
let Button_textSize_preview = document.querySelector(".font-size-preview");
let Button_Boldtext_preview = document.querySelector(".font-weight-preview");
let Button_Lettergap_preview = document.querySelector(
  ".letter-spacing-preview"
);
let Button_Wordspace_preview = document.querySelector(".word-spacing-preview");
let Button_Textcolor_preview = document.querySelector(".text-color-preview");

// padding

let Btn_preview_padding = document.querySelector(".padding-preview");
let Btn_preview_paddingTop = document.querySelector(".padding-preview-top");
let Btn_preview_paddingRight = document.querySelector(".padding-preview-right");
let Btn_preview_paddingBottom = document.querySelector(
  ".padding-preview-bottom"
);
let Btn_preview_paddingLeft = document.querySelector(".padding-preview-left");

//basic

let Btn_preview_width = document.querySelector(".width-preview");
let Btn_preview_height = document.querySelector(".height-preview");
let Btn_preview_background = document.querySelector(".background-preview");

//border
let btn_border_width_direction = document.querySelector(".border-width");
let btn_border_type_direction = document.querySelector(".border-type");
let btn_border_color_direction = document.querySelector(".border-color");
let btn_border_preview_type_direction = document.querySelector(
  ".border-preview-type-direction"
);
let btn_border_preview_color_direction = document.querySelector(
  ".border-preview-color-direction"
);
let btn_preview_border_top = document.querySelector(".border-preview-top");
let btn_preview_border_right = document.querySelector(".border-preview-right");
let btn_preview_border_bottom = document.querySelector(
  ".border-preview-bottom"
);
let btn_preview_border_left = document.querySelector(".border-preview-left");
let btn_preview_border_width = document.querySelector(".border-preview-width");
let btn_preview_border_type = document.querySelector(".border-preview-type");
let btn_preview_border_color = document.querySelector(".border-preview-color");

/// border-radius
let btn_preview_border_radiusAfterALl = document.querySelectorAll(
  ".border-radius-preview ~ span"
);
let btn_preview_border_radius = document.querySelector(
  ".border-radius-preview"
);
let btn_preview_border_radius_top_left = document.querySelector(
  ".border-radius-preview-top-left"
);
let btn_preview_border_radius_top_right = document.querySelector(
  ".border-radius-preview-top-right"
);
let btn_preview_border_radius_bottom_left = document.querySelector(
  ".border-radius-preview-bottom-left"
);
let btn_preview_border_radius_bottom_right = document.querySelector(
  ".border-radius-preview-bottom-right"
);

//logic of input and selects

/// border-radius logic

let allborderradius = document.querySelectorAll(".btn_same_border-radius");

let [
  border_top_left_radiusvalue,
  border_top_right_radiusvalue,
  border_bottom_left_radiusvalue,
  border_bottom_right_radiusvalue,
] = [0, 0, 0, 0];

let FunctionOFBdRadius = () => {
  btn_preview.style.borderRadius = `${border_top_left_radiusvalue}px ${border_top_right_radiusvalue}px 
    ${border_bottom_left_radiusvalue}px ${border_bottom_right_radiusvalue}px`;

  btn_preview_border_radiusAfterALl.forEach((value) => {
    value.style.display = "inline";
    value.parentElement.style.display = "block";
  });
  btn_preview_border_radius.style.display = "none";
};

btn_border_radius.addEventListener("input", () => {
  let radius = btn_border_radius.value;
  btn_preview.style.borderRadius = radius + "px"; // Add "px" here
  btn_preview_border_radius.innerHTML = radius + "px"; // Add "px" here for display
  allborderradius.forEach((value) => {
    value.value = radius;
  });

  btn_preview_border_radius.style.display = "inline";

  btn_preview_border_radiusAfterALl.forEach((value) => {
    value.parentElement.style.display = "block";
    value.style.display = "none";
  });
});

btn_border_radius_top_left.addEventListener("input", () => {
  let radiusToplf = btn_border_radius_top_left.value;
  border_top_left_radiusvalue = radiusToplf;
  btn_preview_border_radius_top_left.innerHTML = radiusToplf + "px";
  FunctionOFBdRadius(); // Call the function to update the preview
});

btn_border_radius_top_right.addEventListener("input", () => {
  let radiusToprt = btn_border_radius_top_right.value;
  border_top_right_radiusvalue = radiusToprt;
  btn_preview_border_radius_top_right.innerHTML = radiusToprt + "px";
  FunctionOFBdRadius(); // Call the function to update the preview
});

btn_border_radius_bottom_left.addEventListener("input", () => {
  let radiusBottomlf = btn_border_radius_bottom_left.value;
  border_bottom_left_radiusvalue = radiusBottomlf;
  btn_preview_border_radius_bottom_left.innerHTML = radiusBottomlf + "px";
  FunctionOFBdRadius(); // Call the function to update the preview
});

btn_border_radius_bottom_right.addEventListener("input", () => {
  let radiusbottomrt = btn_border_radius_bottom_right.value;
  border_bottom_right_radiusvalue = radiusbottomrt;
  btn_preview_border_radius_bottom_right.innerHTML = radiusbottomrt + "px";
  FunctionOFBdRadius(); // Call the function to update the preview
});

// text logic

btn_textSize.value = 29;
Button_textSize_preview.parentElement.style.display = "block";
btn_textSize.addEventListener("input", () => {
  let btn_letterSize = btn_textSize.value;
  btn_preview.style.fontSize = btn_letterSize + "px";
  Button_textSize_preview.innerHTML = btn_letterSize + "px";
});

btn_boldText.addEventListener("input", () => {
  let btn_boldPreview = btn_boldText.value;
  btn_preview.style.fontWeight = btn_boldPreview;
  Button_Boldtext_preview.parentElement.style.display = "block";
  Button_Boldtext_preview.innerHTML = btn_boldPreview;
});

btn_letterGap.addEventListener("input", () => {
  let btn_lettergaping = btn_letterGap.value;
  btn_preview.style.letterSpacing = btn_lettergaping + "px";
  Button_Lettergap_preview.parentElement.style.display = "block";
  Button_Lettergap_preview.innerHTML = btn_lettergaping + "px";
});

btn_textGap.addEventListener("input", () => {
  let btn_wordSpacing = btn_textGap.value;
  btn_preview.style.wordSpacing = btn_wordSpacing + "px";
  Button_Wordspace_preview.parentElement.style.display = "block";
  Button_Wordspace_preview.innerHTML = btn_wordSpacing + "px";
});

btn_textColor.addEventListener("input", () => {
  let btn_color = btn_textColor.value;
  btn_preview.style.color = btn_color;
  Button_Textcolor_preview.parentElement.style.display = "block";
  Button_Textcolor_preview.innerHTML = btn_color;
});

//border logic

// adding all the value in the btn
let arrayBorder = [
  btn_border_width_direction,
  btn_border_type_direction,
  btn_border_color_direction,
];
arrayBorder.forEach((value) => {
  value.style.display = "none";
});

let previewbtnDirectionalValue1 = (btn_preview_border_top.innerHTML = "0px");
let previewbtnDirectionalValue2 = (btn_preview_border_right.innerHTML = "0px");
let previewbtnDirectionalValue3 = (btn_preview_border_bottom.innerHTML = "0px");
let previewbtnDirectionalValue4 = (btn_preview_border_left.innerHTML = "0px");

let innerHTMLofCustom = [
  btn_preview_border_top,
  btn_preview_border_right,
  btn_preview_border_bottom,
  btn_preview_border_left,
];
innerHTMLofCustom.forEach((value) => {
  value.innerHTML = "";
});

let [
  bordertopvalue,
  borderrightvalue,
  borderbottomvalue,
  borderleftvalue,
  borderwidthvalue,
  bordertypevalue,
  bordercolorvalue,
] = [0, 0, 0, 0, 0, "", ""];

function content() {
  previewbtnDirectionalValue1 = btn_preview_border_top.innerHTML =
    bordertopvalue + "px";
  previewbtnDirectionalValue2 = btn_preview_border_right.innerHTML =
    borderrightvalue + "px";
  previewbtnDirectionalValue3 = btn_preview_border_bottom.innerHTML =
    borderbottomvalue + "px";
  previewbtnDirectionalValue4 = btn_preview_border_left.innerHTML =
    borderleftvalue + "px";
  btn_border_preview_type_direction.innerHTML = bordertypevalue;
  btn_border_preview_color_direction.innerHTML = bordercolorvalue;

  // Border type handler
  btn_borderType.addEventListener("input", (event) => {
    bordertypevalue = event.target.value;
    btn_preview_border_type.innerHTML = bordertypevalue;
    directionBorderAnotherValue();
    content();
  });

  // Border color handler
  btn_borderColor.addEventListener("input", () => {
    bordercolorvalue = btn_borderColor.value;
    btn_preview_border_color.innerHTML = bordercolorvalue;
    content();
    directionBorderAnotherValue();
  });
}

let allborder = [
  btn_preview_border_top,
  btn_preview_border_right,
  btn_preview_border_bottom,
  btn_preview_border_left,
];
allborder.forEach((value) => {
  value.style.display = "none";
});

function directionBorder() {
  allborder.forEach((value) => {
    value.style.display = "inline";
  });
  arrayBorder.forEach((value) => {
    value.style.display = "block";
  });

  btn_preview_border_width.style.display = "none";
  btn_preview.style.borderWidth = `${bordertopvalue}px ${borderrightvalue}px ${borderbottomvalue}px ${borderleftvalue}px`;

  document.querySelector(".border-preview-div").style.display = "none";
}

function directionBorderAnotherValue() {
  btn_preview.style.borderStyle = `${bordertypevalue}`;
  btn_preview.style.borderColor = `${bordercolorvalue}`;
  btn_preview.style.borderWidth = `${bordertopvalue}px ${borderrightvalue}px ${borderbottomvalue}px ${borderleftvalue}px`;
}

function normalBorder() {
  allborder.forEach((value) => {
    value.style.display = "none";
  });
  // Apply border width, style, and color together
  btn_preview.style.border = `${borderwidthvalue}px ${bordertypevalue} ${bordercolorvalue}`;
}

// Border top input handler
btn_borderTop.addEventListener("input", () => {
  bordertopvalue = btn_borderTop.value;
  directionBorder();
  content();
});

// Border right input handler
btn_borderRight.addEventListener("input", () => {
  borderrightvalue = btn_borderRight.value;
  directionBorder();
  content();
});

// Border bottom input handler
btn_borderBottom.addEventListener("input", () => {
  borderbottomvalue = btn_borderBottom.value;
  directionBorder();
  content();
});

// Border left input handler
btn_borderLeft.addEventListener("input", () => {
  borderleftvalue = btn_borderLeft.value;
  directionBorder();
  content();
});

// Border width input handler - applies same width to all sides
btn_borderWidth.addEventListener("input", () => {
  borderwidthvalue = btn_borderWidth.value;
  let allvalueSame = [
    btn_borderTop,
    btn_borderRight,
    btn_borderBottom,
    btn_borderLeft,
  ];
  allvalueSame.forEach((allvalue) => {
    allvalue.value = borderwidthvalue;
  });

  document.querySelector(".border-preview-div").style.display = "block";
  arrayBorder.forEach((value) => {
    value.style.display = "none";
  });

  btn_preview_border_width.innerHTML = borderwidthvalue + "px";
  btn_preview_border_width.style.display = "inline";
  normalBorder(); // Ensure all borders are updated

  // Border type handler
  btn_borderType.addEventListener("input", (event) => {
    bordertypevalue = event.target.value;
    btn_preview_border_type.innerHTML = bordertypevalue;
    normalBorder(); // Apply all current values, including widths, type, and color
  });

  // Border color handler
  btn_borderColor.addEventListener("input", () => {
    bordercolorvalue = btn_borderColor.value;
    btn_preview_border_color.innerHTML = bordercolorvalue;
    normalBorder(); // Apply all current values, including widths, type, and color
  });
});

//basic logic

btn_width.addEventListener("input", () => {
  document.querySelector(".width-preview-div").style.display = "block";
  let width = btn_width.value;
  Btn_preview_width.innerHTML = width + "px";
  btn_preview.style.width = width + "px";
});

btn_height.addEventListener("input", () => {
  document.querySelector(".height-preview-div").style.display = "block";

  let height = btn_height.value;
  Btn_preview_height.innerHTML = height + "px";
  btn_preview.style.height = height + "px";
});

btn_Backgroundcolor.addEventListener("input", () => {
  document.querySelector(".background-preview-div").style.display = "block";

  let backgroundcolor = btn_Backgroundcolor.value;
  Btn_preview_background.innerHTML = backgroundcolor;
  btn_preview.style.background = backgroundcolor;
});

//padding logic
let [pdtop, pdright, pdbottom, pdleft] = [0, 0, 0, 0];
function BtnpaddingFunciton() {
  document.querySelector(".padding-preview-div").style.display = "block";

  let allHardpadding = document.querySelectorAll(".padding-preview ~ span");
  allHardpadding.forEach((value) => {
    value.style.display = "inline";
  });
  Btn_preview_padding.style.display = "none";

  btn_preview.style.padding = `${pdtop}px ${pdright}px ${pdbottom}px ${pdleft}px`;
}
btn_padding.addEventListener("input", () => {
  let padding = btn_padding.value;
  let btn_same_paddingOfdirection =
    document.querySelectorAll(".btn_same_padding");
  btn_same_paddingOfdirection.forEach((values) => {
    values.value = padding;
  });
  document.querySelector(".padding-preview-div").style.display = "block";

  Btn_preview_padding.style.display = "inline";
  Btn_preview_padding.innerHTML = padding + "px";
  btn_preview.style.padding = padding + "px";
  let allHardpadding = document.querySelectorAll(".padding-preview ~ span");
  allHardpadding.forEach((value) => {
    value.style.display = "none";
  });
});

btn_paddingTop.addEventListener("input", () => {
  let padding = btn_paddingTop.value;
  pdtop = padding;
  btn_paddingTop.value = padding;
  Btn_preview_paddingTop.innerHTML = padding + "px";
  BtnpaddingFunciton();
});

btn_paddingRight.addEventListener("input", () => {
  let padding = btn_paddingRight.value;
  pdright = padding;
  btn_paddingRight.value = padding;
  Btn_preview_paddingRight.innerHTML = padding + "px";
  BtnpaddingFunciton();
});

btn_paddingBottom.addEventListener("input", () => {
  let padding = btn_paddingBottom.value;
  pdbottom = padding;
  btn_paddingBottom.value = padding;
  Btn_preview_paddingBottom.innerHTML = padding + "px";
  BtnpaddingFunciton();
});

btn_paddingLeft.addEventListener("input", () => {
  let padding = btn_paddingLeft.value;
  pdleft = padding;
  btn_paddingLeft.value = padding;
  Btn_preview_paddingLeft.innerHTML = padding + "px";
  BtnpaddingFunciton();
});

//shadow logic

let [
  btn_inset,
  BtnaddShadowX,
  BtnaddShadowY,
  BtnaddShadowBlur,
  BtnaddShadowRange,
  BtnaddShadowColor,
] = ["", 0, 0, 0, 0, "#ffff"];
function btn_shadow() {
  btn_preview.style.boxShadow = `${btn_inset} ${BtnaddShadowX}px ${BtnaddShadowY}px ${BtnaddShadowBlur}px ${BtnaddShadowRange}px ${BtnaddShadowColor}`;
  document.querySelector(".shadow-preview-div").style.display = "block";
}

btn_shadowX.addEventListener("input", () => {
  let inputValue = btn_shadowX.value;
  BtnaddShadowX = inputValue;
  shadow_previewX.innerHTML = inputValue + "px";
  btn_shadow();
});

btn_shadowY.addEventListener("input", () => {
  let inputValue = btn_shadowY.value;
  BtnaddShadowY = inputValue;
  btn_shadow();
  shadow_previewY.innerHTML = inputValue + "px";
});

btn_shadowBlur.addEventListener("input", () => {
  let inputValue = btn_shadowBlur.value;
  btn_shadow();
  BtnaddShadowBlur = inputValue;
  shadow_previewBlur.innerHTML = inputValue + "px";
});

btn_shadowRange.addEventListener("input", () => {
  btn_shadow();
  let inputValue = btn_shadowRange.value;
  BtnaddShadowRange = inputValue;
  shadow_previewRange.innerHTML = inputValue + "px";
});

btn_shadowColor.addEventListener("input", () => {
  let inputValue = btn_shadowColor.value;
  btn_shadow();
  BtnaddShadowColor = inputValue;
  shadow_previewColor.innerHTML = inputValue;
});

let offInset = true;

Btn_Shadowinset.addEventListener("click", () => {
  if (offInset) {
    btn_inset = "inset";
    offInset = false;
    Btn_Shadowinset.classList.add("inset_on-toggle");
    btn_shadowInsetPreview.innerHTML = "inset";
    btn_shadow();
  } else {
    offInset = true;
    Btn_Shadowinset.classList.remove("inset_on-toggle");
    btn_inset = "";
    btn_shadowInsetPreview.innerHTML = "";
    btn_shadow();
  }
});

// second section
//code
let radius_Span_one = document.querySelectorAll(".one_radius_span");
let radius_Span_two = document.querySelectorAll(".two_radius_span");
let radius_Span_three = document.querySelectorAll(".three_radius_span");
let radius_Span_four = document.querySelectorAll(".four_radius_span");

//inputs
let radiusParent = document.querySelector(".borderRadiusDIV");

let top_radius = document.querySelector("#top_radius");
let right_radius = document.querySelector("#right_radius");
let bottom_radius = document.querySelector("#bottom_radius");
let left_radius = document.querySelector("#left_radius");
let allSpanOfRadius = document.querySelectorAll(".propery span");
let slice = document.querySelector("#slace");
allSpanOfRadius.forEach((value) => {
  value.style.display = "none";
});
slice.style.display = "none";
bottom_radius.value = 100;

let [
  X_radiusTopRight,
  X_radiusBottomLeft,
  Y_radiusTopLeft,
  Y_radiusBottomRight,
] = [0, 100, 0, 0];

const borderRadiusImpliment = () => {
  radiusParent.style.borderRadius = `${X_radiusTopRight}% ${
    100 - X_radiusTopRight
  }% ${100 - X_radiusBottomLeft}% ${X_radiusBottomLeft}% / ${
    100 - Y_radiusTopLeft
  }% ${Y_radiusBottomRight}% ${
    100 - Y_radiusBottomRight
  }% ${Y_radiusTopLeft}% `;
};

top_radius.addEventListener("input", () => {
  let radius = top_radius.value;
  X_radiusTopRight = radius;
  radius_Span_one.forEach((value) => {
    value.style.display = "inline";
  });
  radius_Span_two.forEach((value) => {
    value.style.display = "inline";
  });
  radius_Span_one[0].innerHTML = radius + "% ";
  radius_Span_one[1].innerHTML = 100 - radius + "% ";
  borderRadiusImpliment();
});

right_radius.addEventListener("input", () => {
  let radius = right_radius.value;
  radius_Span_three.forEach((value) => {
    value.style.display = "inline";
  });
  radius_Span_four.forEach((value) => {
    value.style.display = "inline";
  });
  radius_Span_one.forEach((value) => {
    value.style.display = "inline";
  });
  radius_Span_two.forEach((value) => {
    value.style.display = "inline";
  });
  slice.style.display = "inline";
  Y_radiusBottomRight = radius;
  radius_Span_four[0].innerHTML = 100 - radius + "% ";
  radius_Span_four[1].innerHTML = radius + "% ";
  borderRadiusImpliment();
});

bottom_radius.addEventListener("input", () => {
  let radius = bottom_radius.value;
  radius_Span_two.forEach((value) => {
    value.style.display = "inline";
  });
  radius_Span_one.forEach((value) => {
    value.style.display = "inline";
  });

  X_radiusBottomLeft = radius;
  radius_Span_two[0].innerHTML = 100 - radius + "% ";
  radius_Span_two[1].innerHTML = radius + "% ";
  borderRadiusImpliment();
});
left_radius.addEventListener("input", () => {
  let radius = left_radius.value;
  slice.style.display = "inline";
  radius_Span_three.forEach((value) => {
    value.style.display = "inline";
  });
  radius_Span_four.forEach((value) => {
    value.style.display = "inline";
  });
  radius_Span_one.forEach((value) => {
    value.style.display = "inline";
  });
  radius_Span_two.forEach((value) => {
    value.style.display = "inline";
  });
  Y_radiusTopLeft = radius;
  radius_Span_three[0].innerHTML = 100 - radius + "% ";
  radius_Span_three[1].innerHTML = radius + "% ";
  borderRadiusImpliment();
});

// Third section  come soon...
