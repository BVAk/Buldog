	var db;
	//database version setting
	var version = 1.0;
	//database name setting
	var dbName = "tizendb";
	//database display name setting
	var dbDisplayName = "tizen_test_db";
	//database size setting
	var dbSize = 2 * 1024 * 1024;
	 window.onload = function () {
			db = openDatabase(dbName, version, dbDisplayName, dbSize);
			dropTable(db);
			createTable(db);
			db.transaction(function (t) {			    	
			    	  t.executeSql("SELECT COUNT(*) AS c FROM Cryptography_tbl", [],
			    	            function (t, r) {
			    	            	 if(r.rows.item(0).c === 0){
			    	            		 
			    	                	} 
			    	                else if(r.rows.item(0).c ===1){
			    	                	
			    	                } 
			     // alert(r.rows.item(0).c);
			    }, function (tx, e) {
			      alert ("unknown: " + e.message);
			    });
			  });
		};

		function reload(){
			document.location.reload(true);
		}