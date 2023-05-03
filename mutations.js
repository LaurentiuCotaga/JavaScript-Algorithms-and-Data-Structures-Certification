function mutation(arr) {
    const regex = new RegExp(`[^${arr[0]}]`, 'i');
    return !regex.test(arr[1]);
  }
  
  mutation(["hello", "hey"]);