var Conf = require('../lib/config-db');
var url = require('url');

exports.saveconfig = function(req, res){
	Conf.find({}).count({}, function(err, docs){
		if (docs==0) {
			var newConf = new Conf();
			
			domain = url.parse(req.body.origin).hostname.replace("www.","");
			origin = 'http://'gamemisyon.com', https://'gamemisyon.com', http://www.'gamemisyon.com', https://www.'gamemisyon.com'';

			newConf.spku = req.body.secret;
			newConf.origin = [origin];
			newConf.chrlimit = req.body.chrlimit;
			newConf.check = '1';

			newConf.save(function(err) {
				if (err)
					throw err;
				return done(null, newConf);
			});
		}
	});
};
