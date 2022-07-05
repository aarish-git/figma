import React from "react";
import ReactCustomFlagSelect from "react-custom-flag-select";
import "react-custom-flag-select/lib/react-custom-flag-select.min.css";

export default function countryFlag() {
  const find = (arr, obj) => {
    const res = [];
    arr.forEach((o) => {
      let match = false;
      Object.keys(obj).forEach((i) => {
        if (obj[i] == o[i]) {
          match = true;
        }
      });
      if (match) {
        res.push(o);
      }
    });
    return res;
  };

  const FLAG_SELECTOR_OPTION_LIST = [
    {
      id: "1",
      name: "US",
      displayText: "US(1)",
      locale: "en-US",
      englishName: "United States",
      flag: require("../src/image/flags/us.svg"),
    },
    {
      id: "86",
      name: "中国",
      displayText: "中国(86)",
      locale: "zh-CN",
      englishName: "China",
      flag: require("../src/image/flags/cn.svg"),
    },
  ];

  const { areaCode, phone, validate } = this.state;
  const currentItem = find(FLAG_SELECTOR_OPTION_LIST, { id: areaCode })[0];

  <ReactCustomFlagSelect
    attributesWrapper={{ id: "areaCodeWrapper", tabIndex: "1" }} //Optional.[Object].Modify wrapper general attributes.
    attributesButton={{ id: "areaCodeButton" }} //Optional.[Object].Modify button general attributes.
    attributesInput={{ id: "areaCode", name: "areaCode" }} //Optional.[Object].Modify hidden input general attributes.
    value={currentItem.id} //Optional.[String].Default: "".
    disabled={false} //Optional.[Bool].Default: false.
    showSearch={true} // Optional.[Bool].Default: false. Show a search box in order to find option quickly.
    fields={["name", "locale", "displayText", "englishName"]} // Optional.[array].Default: ['name']. Fields for search filtering.
    // keyword={''} // Optional.[String].Default: ''. Show a keyword for search box.
    showArrow={true} //Optional.[Bool].Default: true.
    animate={true} //Optional.[Bool].Default: false.
    optionList={FLAG_SELECTOR_OPTION_LIST} //Required.[Array of Object(s)].Default: [].
    // selectOptionListItemHtml={<div>us</div>} //Optional.[Html].Default: none. The custom select options item html that will display in dropdown list. Use it if you think the default html is ugly.
    // selectHtml={<div>us</div>} //Optional.[Html].Default: none. The custom html that will display when user choose. Use it if you think the default html is ugly.
    classNameWrapper="" //Optional.[String].Default: "".
    classNameContainer="" //Optional.[String].Default: "".
    classNameOptionListContainer="" //Optional.[String].Default: "".
    classNameOptionListItem="" //Optional.[String].Default: "".
    classNameDropdownIconOptionListItem={""} //Optional.[String].Default: "".
    customStyleWrapper={{}} //Optional.[Object].Default: {}.
    customStyleContainer={{ border: "none", fontSize: "12px" }} //Optional.[Object].Default: {}.
    customStyleSelect={{ width: "100px" }} //Optional.[Object].Default: {}.
    customStyleOptionListItem={{}} //Optional.[Object].Default: {}.
    customStyleOptionListContainer={{
      maxHeight: "100px",
      overflow: "auto",
      width: "120px",
      marginTop: "11px",
    }} //Optional.[Object].Default: {}.
    onChange={(areaCode) => {
      this.setState({ areaCode: areaCode }, () => {
        this.handlePhoneChange(phone);
      });
    }}
    // onBlur={() => {}} //Optional.[Func].Default: none.
    // onFocus={(e) => {console.log(e)}} //Optional.[Func].Default: none.
    // onClick={(e) => {console.log(e)}} //Optional.[Func].Default: none.
  />;
}
