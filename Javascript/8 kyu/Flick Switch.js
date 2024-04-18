function flickSwitch(arr) {
    let i = true;
    return arr.map((item) => {
      if (item === 'flick') {
        i = !i;
      }
      return i;
    });
  }