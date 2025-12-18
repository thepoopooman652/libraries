function generate_uuid_v4() {
    // Generate 16 bytes (128 bits) of random data
    $data = random_bytes(16);

    // Set version to 0100 (UUID version 4)
    $data[6] = chr(ord($data[6]) & 0x0f | 0x40);

    // Set bits 6-7 of the clock_seq_hi_and_reserved to 10
    $data[8] = chr(ord($data[8]) & 0x3f | 0x80);

    // Format the bytes into a UUID string
    return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
}

// Example usage:
// echo generate_uuid_v4();
// Output will be a 36-character string, e.g., "f47ac10b-58cc-4372-a567-0e02b2c3d479"
