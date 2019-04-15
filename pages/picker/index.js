import initAreaPicker, { getSelectedAreaData } from '../../template/index';

Page({
  data: {
    areaPicker: {
      show: true,
    }
  },
  onShow: () => {
    initAreaPicker({
      // hideDistrict: true, // 是否隐藏区县选择栏，默认显示
    });
  },
  getSelecedData() {
    console.log(getSelectedAreaData());
  },
});
