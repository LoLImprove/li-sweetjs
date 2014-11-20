macro (||=) {
  rule infix { $x | $y } => {
    $x = $x || $y
  }
}

export (||=);
