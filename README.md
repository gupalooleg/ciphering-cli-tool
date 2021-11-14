# ciphering-cli-tool

Ciphering CLI tool is application that performs encode/decode operations according to cipher algorithms: [Atbash](https://en.wikipedia.org/wiki/Atbash), [Caesar](https://en.wikipedia.org/wiki/Caesar_cipher), [ROT8( as variant of ROT13)](https://en.wikipedia.org/wiki/ROT13). Input/output can be done both using the console and files.

This application was implemented as part of the course [NodeJS 2021Q4](https://rs.school/nodejs/).

## Installation and launch

1. Clone the repository branch: `git clone https://github.com/gupalooleg/ciphering-cli-tool.git -b develop`.
2. Go to the application directory: `cd ciphering-cli-tool`.
3. Run the application: `node .`.

## Usage

### Arguments

The application uses the following arguments:

| Arguments        | Alias       | Mandatory | Value                                                                                         | Additional information                                                                                                                 |
| ---------------- | ----------- | --------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Configuration    | -c/--config | Yes       | A string that matches pattern {XY(-)}n.                                                       | X - 'A'(Atbash) or 'C'(Caesar) or 'R'(ROT8). Y - '1'(encode) or '0'(decode). If X=='A' then Y should not be used. E.g: 'C1-R1-A-R0-C0' |
| Input file path  | -i/--input  | No        | A string that contains the path to an existing file.                                          | If no value is specified, then data input is performed through the console.                                                            |
| Output file path | -o/--output | No        | A string that contains the path to the file (if the file does not exist, it will be created). | If the value is not specified, then the data is output to the console.                                                                 |

> Note: When writing to a file, data is appended.

### Error

Error generation cases:

- 'Configuration' argument not specified.
- The value of 'Configuration' argument does not match the pattern.
- Duplicate arguments.
- Using argument without value or with an empty value.
- The directory is specified instead of the file.
- The specified file does not exist.
- Not enough permissions to work with the specified file.

### Examples

1. `node . -c "C1-R1-A" -i "input.txt" -o "output.txt"`

   > INPUT: input.txt>>>This is secret!
   >
   > OUTPUT: output.txt>>>Xjiy iy ymozmx!

2. `node . -c "R1-C1-R0-A" -i "input.txt"`

   > INPUT: input.txt>>>This is secret!
   >
   > OUTPUT: console>>>Frqg qg guwhuf!

3. `node . -c "A-A-R0-C0" -o "output.txt"`

   > INPUT: console>>>This is secret!
   >
   > OUTPUT: output.txt>>>Kyzj zj jvtivk!

4. `node . -c "C1-R1-C0-C0-A-R0-R1-R1-A-C1"`

   > INPUT: console>>>This is secret!
   >
   > OUTPUT: console>>>This is secret!

5. `node .`
   > OUTPUT: console>>>Error: The configuration argument "-c, --config" is required.
