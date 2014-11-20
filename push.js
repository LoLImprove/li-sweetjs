macro (<<) {
  rule infix { $array:expr | $value:expr } => {
    $array.push($value)
  }
}

export <<;
