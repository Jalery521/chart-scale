/**
 * 对传入值格式话并记录转化的10的乘幂
 * @param {Number} number 需格式化正数值
 * @returns {Object} formatNumber 格式化后数值power 10的乘幂
 */
export declare function formatNumInteger(number: number): {
    formatNumber: number;
    power: number;
};
/**
 * 以下刻度计算实现参考 https://www.jb51.net/article/251732.htm,使用BigNumber.js保证计算中精度
 * @param {Number} maxNum 最大值
 * @param {Number} minNum 最小值
 * @param {Number} splitNumber 刻度区间数量
 * @returns {Object} max 最大刻度min 最小刻度intervel 刻度间隔
 */
export declare function getChartScale(maxNum: number, minNum: number, splitNumber?: number): {
    max: number;
    min: number;
    interval: number;
};
export default getChartScale;
