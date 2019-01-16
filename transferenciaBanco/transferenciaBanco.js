var clientbank
var clientacount
var clientpoint = 100000000000
var finishbank
var finishacount
var finishpoint = 100000000000
var transferhour = 9
var pointtransfer = 100000
var costtransfer = 100


if (clientpoint > 100000 + costtransfer)
{
    clientbank = 1
    clientacount = 1
}

if (finishpoint >1000000)
{
    finishbank = 1
    finishacount = 1
}

if ((transferhour >= 9 && transferhour <= 12 ) || (transferhour >= 15 && transferhour <= 20 ))
{
  transferhour = 1
}

if ( ((clientbank || clientacount) && (finishbank || finishacount)) && transferhour == true )
{
  function transferCash()
  {
    clientpoint = clientpoint - costtransfer - pointtransfer

    if (clientbank == finishbank)
    {
      clientpoint = clientpoint - pointtransfer
      finishpoint = finishpoint + pointtransfer
    }
    alert("TRANSFERENCIA REALIZADA")
  }
  transferCash()
}
