window.onload = function () {
	db = openDatabase(dbName, version, dbDisplayName, dbSize);
	//dropTable(db);
	//createTable(db);
	db.transaction(function (t) {
	    t.executeSql('SELECT COUNT(*) AS c FROM Cryptography_tbl', [], function (t, r) {
	      console.log( r.rows.item(0).c);
	      if(r.rows.item(0).c == 0){
	    	  window.location.href = "index.html#question";
	         } else if(r.rows.item(0).c == 1){
	    	  
	    	 }
	     // alert(r.rows.item(0).c);
	    }, function (tx, e) {
	      alert ("unknown: " + e.message);
	    });
	  });
	  }
	  