use rand::Rng;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn intersect(probabilityOfA: f32, probabilityOfB: f32) -> f32 {
    probabilityOfA * probabilityOfB
}

#[wasm_bindgen]
pub fn union(probabilityOfA: f32, probabilityOfB: f32) -> f32 {
    probabilityOfA + probabilityOfB - intersect(probabilityOfA, probabilityOfB)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_intersect() {
        let result = intersect(0.5, 0.5);

        assert_eq!(result, 0.25);
    }

    #[test]
    fn test_intersect2() {
        let result = intersect(0.3, 1.0);

        assert_eq!(result, 0.3);
    }

    
    #[test]
    fn test_union() {
        let result = union(0.5, 0.5);

        assert_eq!(result, 0.75);
    }

    #[test]
    fn test_union2() {
        let result = union(0.3, 0.3);

        assert_eq!(result, 0.51);
    }
}