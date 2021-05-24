function ping(address) {
  return new Promise((resolve, reject) => {
    let http = new XMLHttpRequest();
    http.open("GET", address, true)

    http.onload = function(res) {
      resolve({
        status: res.target.status,
        response: res.target.response
      })
    }

    http.onerror = function() {
      reject("error")
    }

    http.timeout = 2000;
    http.ontimeout = function() {
      reject("timeout")
    }

    http.send()
  })
}

