function testGenerateNextInvoiceNumber() returns error? {
    // Prepare headers if needed
    map<string|string[]> headers = {"Content-Type": "application/json"};

    // Call the resource function to generate the next invoice number
    InvoiceNumber|error result = paypalClient->/generate\-next\-invoice\-number.post(headers);
    // Assert that the result is not an error
    test:assertFalse(result is error, msg = "Failed to generate next invoice number");

    // // Optionally, check the structure of the InvoiceNumber
    if result is InvoiceNumber {
        io:println("Generated Invoice Number: ", result);
        test:assertNotEquals(result.invoiceNumber, "", msg = "Invoice number should not be empty");
    }
}
