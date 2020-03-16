'use strict';

var products = {
    "basic": {
        "name": "basic electricity tariff",
        "yearly_fixed_charge": 60,
        "consumption_charge": 0.22
    },
    "packaged": {
        "name": "Packaged tariff",
        "yearly_fixed_charge": 800,
        "yearly_cap": 4000,
        "excess_charge": 0.3
    }
};


var calculate_basic_tariff = function(yearly_consumption) {
    console.log('function calculate_basic_tariff invoked with consumption set to '+ yearly_consumption);
    // TODO use desctructure here!!
    var basic_tariff = products['basic'];
    var yearly_fixed_charge = basic_tariff['yearly_fixed_charge'];
    var consumption_charge = basic_tariff['consumption_charge'];
    return {
        "name": basic_tariff['name'],
        "cost": yearly_fixed_charge + (yearly_consumption * consumption_charge)
    }
}

var calculate_packaged_tariff = function(yearly_consumption) {
    console.log('function calculate_packaged_tariff invoked with consumption set to '+ yearly_consumption);
    // TODO use desctructure here!!
    var packaged_tariff = products['packaged'];
    var yearly_fixed_charge = packaged_tariff['yearly_fixed_charge'];
    var yearly_cap = packaged_tariff['yearly_cap'];
    var excess_charge = packaged_tariff['excess_charge'];

    var excess_consumption = yearly_consumption - yearly_cap;

    return {
        "name": packaged_tariff['name'],
        "cost": yearly_fixed_charge + (excess_consumption * excess_charge)
    }
}

exports.get_all_tariffs = function(req, res) {
    var consumption = req.query.consumption;
    var basic_calculation = calculate_basic_tariff(consumption);
    var packaged_calculation = calculate_packaged_tariff(consumption);
    var tariff_list = [basic_calculation, packaged_calculation];
    tariff_list.sort((a, b) => (a.cost > b.cost) ? 1 : -1)
    res.send(tariff_list);
}

exports.get_basic = function(req, res) {
    var consumption = req.query.consumption;
    var basic_calculation = calculate_basic_tariff(consumption);
    console.log('Calculated basic tariff of ' + basic_calculation['cost'] + ' given a yearly consumption of ' + consumption);
    res.send(basic_calculation);
}

exports.get_packaged = function(req, res) {
    var consumption = req.query.consumption;
    var packaged_calculation = calculate_packaged_tariff(consumption);
    console.log('Calculated packaged tariff of ' + packaged_calculation['cost'] + ' given a yearly consumption of ' + consumption);
    res.send(packaged_calculation);
}

