const HANDSHAKE = {
  1: "wink",
  10: "double blink",
  100: "close your eyes",
  1000: "jump",
  10000: "reverse"
}

// Convert Dec to Binary
const decToBin = (dec) => {
  var bin = "";
  do {
    dec % 2 == 0 ? bin = "0" + bin : bin = "1" + bin;
    dec = Math.floor(dec / 2);
  } while (dec > 0);
  return parseInt(bin);
}

const extractHandshakes = (params, handShakeCode) => {
  while (params.remainder >= handShakeCode) {
    params.codes.push(HANDSHAKE[handShakeCode]);
    params.remainder -= handShakeCode;
  }

  return params;
}

export const commands = (dec) => {
  var bin = decToBin(dec);
  var params = { remainder: bin, codes: [] };
  
  for (let index = 10000; index >= 1; index /= 10) params = extractHandshakes(params, index);

  if (params.codes.includes(HANDSHAKE[10000])) {
    params.codes.splice(params.codes.indexOf(HANDSHAKE[10000]), 1);
  }
  else {
    params.codes = params.codes.reverse();
  }

  return params.codes;

};

