var clientbank = 1
var clientacount = 1
var clientpoint = 100000000000
var finishbank = 1
var finishacount = 1
var finishpoint = 100000000000
var transferhour = 10
var pointtransfer = 100000
var costtransfer = 100
if (((transferhour >= 9 && transferhour <= 12 ) || (transferhour >= 15 && transferhour <= 20 )) && (((clientbank || clientacount) && (finishbank || finishacount)) && transferhour))
{
    function transferCash()
    {

    if (clientbank == finishbank)
    {
      clientpoint = clientpoint - pointtransfer
      finishpoint = finishpoint + pointtransfer
    }
    
      else
      {
        clientpoint = clientpoint - costtransfer - pointtransfer
      }
    alert("TRANSFERENCIA REALIZADA")

    }
    transferCash()
}