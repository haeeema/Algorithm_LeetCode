class Solution {
    func romanToInt(_ s: String) -> Int {
        let arr = Array(s)
        var sum = 0
        
        for i in 0..<arr.count-1 {
            if arr[i] == "M" {
                sum += 1000
            } else if arr[i] == "D" {
                sum += 500
            } else if arr[i] == "C" {
                if arr[i + 1] == "D" || arr[i + 1] == "M" {
                    sum -= 100
                } else {
                    sum += 100
                }
            } else if arr[i] == "L" {
                sum += 50
            } else if arr[i] == "X" {
                if arr[i + 1] == "L" || arr[i + 1] == "C" {
                    sum -= 10
                } else {
                    sum += 10
                }
            } else if arr[i] == "V" {
                sum += 5
            } else if arr[i] == "I" {
                if arr[i + 1] == "V" || arr[i + 1] == "X" {
                    sum -= 1
                } else {
                    sum += 1
                }
            }
        }
        switch arr.last {
        case "M": sum += 1000
        case "D": sum += 500
        case "C": sum += 100
        case "L": sum += 50
        case "X": sum += 10
        case "V": sum += 5
        case "I": sum += 1
        default: sum += 0
        }
        return sum
    }
}

// TACTIC
// 1. 's'를 array형태로 변환
//      - Array(String)을 사용하여 변환하는 방법
//      - for문과 append를 사용하는 방법
// 2. for문을 사용하여 첫번째 문자부터 가져온다.
// 3. 가장 마지막 문자인지 확인

// POINT
// 1. indices를 사용하여 String에 index로 접근
// 2. String을 array로 만들어 index로 접근