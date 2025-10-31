import { Builder, By, until, Key } from "selenium-webdriver";

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
    await driver.sleep(3000); // ⏳ wait for page to load

    // Navigate to Manage Users section (update XPath according to your app)
    const manageUsersLink = await driver.wait(
      until.elementLocated(By.xpath('//*[@id="root"]/div/button')),
      15000
    );
    await manageUsersLink.click();
    console.log("➡️ Navigated to Manage Users section");
    await driver.sleep(2000);

    // Wait for ID input
    const idInput = await driver.wait(
      until.elementLocated(By.css('input[id="id"]')),
      25000
    );
    await driver.wait(until.elementIsVisible(idInput), 10000);
    console.log("✅ ID input found");
    await driver.sleep(1000);

    // Wait for Name input
    const nameInput = await driver.wait(
      until.elementLocated(By.css('input[id="name"]')),
      25000
    );
    await driver.wait(until.elementIsVisible(nameInput), 10000);
    console.log("✅ Name input found");
    await driver.sleep(2000);

    // Add User
    await idInput.sendKeys("1001");
    await nameInput.sendKeys("Test User");
    const addButton = await driver.findElement(
      By.xpath("//button[contains(text(),'Add User')]")
    );
    await addButton.click();
    console.log("➕ User added");
    await driver.sleep(2000); // ⏳ wait to see added user

    // Update User
    const updateButton = await driver.wait(
      until.elementLocated(By.xpath("//button[contains(text(),'Update')]")),
      20000
    );
    await updateButton.click();
    await driver.sleep(3000);

    const nameField = await driver.findElement(By.css('input[id="name"]'));
    await nameField.sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);
    await nameField.sendKeys("Updated User");
    const updateUserButton = await driver.findElement(
      By.xpath("//button[contains(text(),'Update User')]")
    );
    await updateUserButton.click();
    console.log("✏️ User updated");
    await driver.sleep(3000);

    // Delete User (override confirm)
    await driver.executeScript("window.confirm = function(){ return true; }");
    const deleteButton = await driver.findElement(
      By.xpath("//button[contains(text(),'Delete')]")
    );
    await deleteButton.click();
    console.log("🗑️ User deleted");
    await driver.sleep(3000); // ⏳ wait to see deletion

    console.log("✅ CRUD test completed successfully!");
  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
    console.log("🛑 Browser closed");
  }
}

testCRUD();
