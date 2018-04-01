'use strict';
var teamInfo=require("./../config/team.json");
exports.getInfo=function(req,res){
	return res.status(200).send(teamInfo);
};
