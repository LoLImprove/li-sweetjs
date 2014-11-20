macro (=>) {
  rule infix { $x | $fn($args ...) } => {
    $x . forEach(function(element) {
      element . $fn($args ...);
    });
  }
}

export =>;
