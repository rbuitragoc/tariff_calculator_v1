# Tariff Calculator

VH MDE Mission March 2020

This is a REST API that provides comparison between two electricity utility bundle products: 

"Basic" Tariff, which includes a monthly fixed cost plus a charge per kWh consumed.
"Packaged" Tariff, which includes a yearly fixed cost, and an over consumption charge per kWh over yearly cap.

To use it:

Request the estimated costs by providing an approximate of your electricity yearly consumption (in kWh). 
The request is done via HTTP GET (below example uses cURL utility):

  curl -X GET "http://localhost:3000/plans?consumption=6079.45"
  
 Will return a JSON with two calculations, using the two products described above, sorted in ascendent order.
