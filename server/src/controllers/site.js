
exports.index = async (ctx, next) => {
	ctx.body = `
	    <!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Document</title>
		</head>
		<body>
		    <h1>Hello Node Web!</h1>
		</body>
		</html>`;
	await next();
};
