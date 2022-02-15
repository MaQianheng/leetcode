/**
 * 
 	Alice 有 n 枚糖，其中第 i 枚糖的类型为 candyType[i] 。Alice 注意到她的体重正在增长，所以前去拜访了一位医生。
	医生建议 Alice 要少摄入糖分，只吃掉她所有糖的 n / 2 即可（n 是一个偶数）。Alice 非常喜欢这些糖，她想要在遵循医生建议的情况下，尽可能吃到最多不同种类的糖。

	给你一个长度为 n 的整数数组 candyType ，返回： Alice 在仅吃掉 n / 2 枚糖的情况下，可以吃到糖的最多种类数。
	示例 1：

	输入：candyType = [1,1,2,2,3,3]
	输出：3
	解释：Alice 只能吃 6 / 2 = 3 枚糖，由于只有 3 种糖，她可以每种吃一枚。
	示例 2：

	输入：candyType = [1,1,2,3]
	输出：2
	解释：Alice 只能吃 4 / 2 = 2 枚糖，不管她选择吃的种类是 [1,2]、[1,3] 还是 [2,3]，她只能吃到两种不同类的糖。
	示例 3：

	输入：candyType = [6,6,6,6]
	输出：1
	解释：Alice 只能吃 4 / 2 = 2 枚糖，尽管她能吃 2 枚，但只能吃到 1 种糖。

	来源：力扣（LeetCode）
	链接：https://leetcode-cn.com/problems/distribute-candies
	著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(arrCandy) {
	arrCandy = arrCandy.sort((a, b) => a - b)
    let numCurType = null
    let numRes = 0
    for (let i = 0; i < arrCandy.length; i++) {
        if (arrCandy[i] !== numCurType) {
            numRes += 1
            numCurType = arrCandy[i]
            if (numRes === arrCandy.length >> 1) return numRes
        }
    }
    return numRes
};

/**
 * 方法一：贪心
一方面，设糖果数量为 nn，由于妹妹只能分到一半的糖果，所以答案不会超过 \dfrac{n}{2} 
2
n
​
 ；另一方面，设这些糖果一共有 mm 种，答案也不会超过 mm。

若 m\le\dfrac{n}{2}m≤ 
2
n
​
 ，则可以每种糖果至少分一颗给妹妹，此时答案为 mm；若 m>\dfrac{n}{2}m> 
2
n
​
 ，则妹妹只能分到 \dfrac{n}{2} 
2
n
​
  种糖果，每种糖果分一颗，此时答案为 \dfrac{n}{2} 
2
n
​
 。

综上所述，答案为 \min\Big(m,\dfrac{n}{2}\Big)min(m, 
2
n
​
 )。
 */

var distributeCandies2 = function(candyType) {
    const set = new Set(candyType);
    return Math.min(set.size, candyType.length / 2);
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/distribute-candies/solution/fen-tang-guo-by-leetcode-solution-l4f6/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

console.log(distributeCandies([100000,0,100000,0,100000,0,100000,0,100000,0,100000,0]))