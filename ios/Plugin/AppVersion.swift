import Foundation

@objc public class AppVersion: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
