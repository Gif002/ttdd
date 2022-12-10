const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'0c8631f3-9058-4774-8aed-cc7b1068f942'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
