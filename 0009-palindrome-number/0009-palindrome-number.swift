class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        if x < 0 {
            return false
        }
        
        var y: Int? = Int(String(String(x).reversed()))
        if x == y! {
            return true
        } else {
            return false
        }
    }
}

// TACTIC
// 1. 변수 x2를 만든다.
// 2. x의 값을 String으로 변환 뒤 x2에 저장
// 3. x2의 값을 Int로 변환
// 4. x의 값과 x2의 값을 비교한뒤 같으면 true, 다르면 false를 반환

// POINT
// 1. reversed()를 사용하고 다시 String으로 바꿔줘야한다.
// reversed() 메서드만 호출하면 결과 타입은 ReversedCollection이다.
// 이를 문자열로 만들어주려면 String() 생성자를 사용해야 한다.






