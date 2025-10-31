import { Builder, By, until } from "selenium-webdriver";

async function testCRUD() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    console.log("🚀 Starting CRUD test...");

    // Maximize browser window
    await driver.manage().window().maximize();
    console.log("🖥️ Browser maximized");

    // Open frontend
    await driver.get("http://localhost:5173"); // Update to your React URL
    console.log("🌐 Frontend opened");

    // Navigate to Manage Users section (update XPath according to your app)
    const manageUsersLink = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="root"]/div/button')),
      10000
    );
    await manageUsersLink.click();
    console.log("➡️ Navigated to Manage Users section");

    // Wait for ID input
    const idInput = await driver.wait(
      until.elementLocated(By.css('input[id="id"]')),
      20000
    );
    await driver.wait(until.elementIsVisible(idInput), 5000);
    console.log("✅ ID input found");

    // Wait for Name input
    const nameInput = await driver.wait(
      until.elementLocated(By.css('input[id="name"]')),
      20000
    );
    await driver.wait(until.elementIsVisible(nameInput), 5000);
    console.log("✅ Name input found");

    // Add User
    await idInput.sendKeys("1001");
    await nameInput.sendKeys("Test User");
    const addButton = await driver.findElement(By.xpath("//button[contains(text(),'Add User')]"));
    await addButton.click();
    console.log("➕ User added");
    await driver.sleep(3000);

    // Update User
    const updateButton = await driver.wait(
      until.elementLocated(By.xpath("//button[contains(text(),'Update')]")),
      20000
    );
    await updateButton.click();

    const nameField = await driver.findElement(By.css('input[id="name"]'));
    await nameField.clear();
    await nameField.sendKeys("Updated User");
    const updateUserButton = await driver.findElement(By.xpath("//button[contains(text(),'Update User')]"));
    await updateUserButton.click();
    console.log("✏️ User updated");
    await driver.sleep(5000);

    // Delete User (override confirm)
    await driver.executeScript("window.confirm = function(){ return true; }");
    const deleteButton = await driver.findElement(By.xpath("//button[contains(text(),'Delete')]"));
    await deleteButton.click();
    console.log("🗑️ User deleted");
    await driver.sleep(3000);

    console.log("✅ CRUD test completed successfully!");
  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
    console.log("🛑 Browser closed");
  }
}

testCRUD();
