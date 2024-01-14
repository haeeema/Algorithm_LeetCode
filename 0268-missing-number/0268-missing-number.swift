class Solution {
    func missingNumber(_ nums: [Int]) -> Int {
        // 1.
        let max: Int? = nums.max()
        let min: Int? = nums.min()
        if min! != 0 {
            return 0
        }
        
        // 2.
        var array2: Array<Int> = []
        for i in min! ... max! {
            array2.append(i)
        }

        
        // 3.
        var nums2 = nums
        nums2.sort()
        array2.sort()
        for i in array2 {
            if i != nums2[i] {
                return i
            }
        }
        return max! + 1
        
        // // \U0001f525.
        // for i in min! ... max! {
        //     if nums.contains(i) == false {
        //         return i
        //     }
        // }
        // return max! + 1
    }
}

// TACTIC
// 1. nums에서 가장 큰 수와 가장 작은 수를 알아낸다.
//      - array.max()과 array.min()을 각각 사용한다.
//      - min의 값이 0이 아닌 경우, 0을 출력
// 2. array2를 만든다.
//      - array2에 for문과 append문을 이용하여 값들을 추가한다.
// 3. nums와 array2를 비교해서 없는 수를 출력한다.
//      - nums와 array2를 오름차순으로 정렬한다.
//      - for문을 사용하여 순서대로 비교하고 서로 다르면, 그 수를 출력
// \U0001f525. array를 만들지 말고 바로 비교해보자 -> runtime시간이 더 걸린다.

// POINT
// 1. Optinal Type:
// Swift의 max() 함수는 Optional 값을 반환합니다. 이는 입력된 배열이 비어있을 수 있기 때문입니다.
// 만약 배열이 비어있다면 max() 함수는 nil을 반환합니다.
// 따라서 max()를 사용한 결과를 저장하는 변수나 상수는 자동으로 Optional 타입이 됩니다.
