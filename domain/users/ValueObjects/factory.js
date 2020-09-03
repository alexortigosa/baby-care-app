import QrCodeValueObject from './QrCodeValueObject'

export default class UserValueObjectFactory {
  static qrCodeValueObject = ({qrCode}) => new QrCodeValueObject({qrCode})
}
