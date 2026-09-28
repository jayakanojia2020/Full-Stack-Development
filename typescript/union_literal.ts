type Status = "loading" | "success" | "error";

let status: Status;

status = "loading"; // ✅
status = "success"; // ✅
//status = "failed";  // ❌