const path = require("path");
const fs = require("fs");
const { removeDuplicates } = require("../library/library.formatter");

// join path of the directory
const directoryPath = path.join(__dirname, "../../vendors");

//save others to file if need be
const updateVendorFile = (data, fileName) => {
    return new Promise((resolve, reject) => {
    const stringifyData = JSON.stringify(data);
     fs.writeFileSync(directoryPath + "/" + fileName, stringifyData, (err) => {
        if (err) return reject(err);
        resolve(true);
    });
    
    });
  };

//save others to file if need be
const saveOrder = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("users.json", stringifyData);
};


//read the user data from json file
const readFile = (dir) => {
  const jsonData = fs.readFileSync(dir);
  const dataJSON = jsonData.toString();
  return JSON.parse(dataJSON);
};

const getVendorsFiles = () => {
  // console.log('directory path', directoryPath);
  let vendorsFilesArray = [];
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, vendorsFiles) => {
      // handling error
      if (err) {
        console.log("Unable to scan directory: " + err);
        return null;
      } else {
        //   console.log("vendors file dir", vendorsFiles);
        vendorsFiles.forEach((currentFile) => {
          // get Current file path
          const filePath = path.resolve(directoryPath, currentFile);
          // get information about the file
          fs.stat(filePath, (err, stat) => {
            if (err) throw error;

            // check if the current path is file or folder
            const isFile = stat.isFile();

            if (isFile) {
              vendorsFilesArray.push({ file: currentFile, path: filePath });
            }
          });
        });

        // allow the files to complete processing before returning data
        setTimeout(() => {
          resolve(vendorsFilesArray);
        }, 1000);
      }
    });
  });
};

const getAllVendors = (vendorsFiles) => {
    let vendors = {};
    let vendorsList = {};
    let vendorsFileName = {};
  return new Promise((resolve, reject) => {
    //  check if vendorsFiles is not null
    if (Array.isArray(vendorsFiles) && vendorsFiles.length > 0) {
      vendorsFiles.forEach((currentFile) => {
        // get current file extention first to know if the extention matches the need one. Else jump the file
        const fileExtention = path.parse(currentFile.file).ext;

        if (fileExtention == ".json") {
          // get current file name
          const name = path.parse(currentFile.file).name;
          vendors[readFile(currentFile.path).name] = readFile(currentFile.path);
          vendorsFileName[readFile(currentFile.path).name] = name;
        }
      });

      setTimeout(() => {
        resolve({vendorsData: vendors, vendorsStorageFileName: vendorsFileName});
      }, 500);
    }

  });
};

/**
 * Return array of object containing all the vendors files data
 * @returns Array
 */
const getVendors = async () => {
  const data = await getVendorsFiles();

  if (data !== null) {
    // console.log("vendors data", data);
    return await getAllVendors(data);
  }
};

module.exports = { getVendors, updateVendorFile, saveOrder };
